import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here (e.g., log, display a message, etc.)
        this.openSnackBar('Error occurred', 'Dismiss');
        console.error('HTTP Error:', error);
        // Optionally rethrow the error to propagate it
        return throwError(error);
      }),
      finalize(() => {
        // Show a success snackbar when the request completes successfully
        this.openSnackBar('Request successful', 'Dismiss');
      })
    );
  }
}
