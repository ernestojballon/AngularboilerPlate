import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
        console.log(err);
          if (err.status === 401) {
              console.log(err);
              // auto logout if 401 response returned from api
              this.router.navigate(['/']);
              location.reload(true);
          }
          
          const error = err.error.message || err.statusText;
          return throwError(error);
      }))
  }
}
