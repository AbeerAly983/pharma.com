import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {{
    const authToken = localStorage.getItem('access_token'); // get the token from local storage
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`) // set the authorization header
    });
    return next.handle(authReq);
  }
}

}
