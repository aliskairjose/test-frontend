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
  commonService.loadingSubject(true);
  return next(req).pipe(
    map((event: HttpEvent<unknown>) => {
      commonService.loadingSubject(false);
      return event;
    }),
    catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        const err = error.error.message ?? error.message;
        commonService.toastSubject(err);
      }
      commonService.loadingSubject(false);
      return throwError(() => error);
    }),
  );
};
