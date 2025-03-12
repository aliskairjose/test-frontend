import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {

  return next(req).pipe(
    map((event: HttpEvent<unknown>) => event),
    catchError((error: HttpErrorResponse) => {
      if (error instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (error.status === 401) {
          // Specific handling for unauthorized errors
          console.error('Unauthorized request:', error);
          // You might trigger a re-authentication flow or redirect the user here
        } else {
          // Handle other HTTP error codes
          console.error('HTTP error:', error);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', error);
      }
      return throwError(() => error);
    })
  );
};
