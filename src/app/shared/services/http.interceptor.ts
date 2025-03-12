import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { CommonService } from './common.service';

export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const commonService = inject(CommonService);
  return next(req).pipe(
    map((event: HttpEvent<unknown>) => event),
    catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        const err = error.error.message ?? error.message;
        commonService.toastSubject(err);
      }
      return throwError(() => error);
    })
  );
};
