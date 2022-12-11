import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpStatusCode,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private router : Router,private errorHandler : ErrorHandler ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (errorResponse: HttpErrorResponse)=>{
          if (errorResponse.status === HttpStatusCode.NotFound){
            this.router.navigateByUrl('/error')
          }else if(errorResponse.status === HttpStatusCode.BadRequest){
            alert("Look at your console, bad request")
          }else{
            console.log(errorResponse)
            this.errorHandler.handleError(errorResponse)
          }
        }
      
        
      })
    )
  }
}
