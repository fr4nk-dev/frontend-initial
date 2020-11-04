import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  count = 0;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();
    this.count++;
    return next.handle(req).pipe(
      tap(
        (event) => {
          console.log('##### EVENTO #####');
          console.log(event);
        },
        (error) => {
          console.log('##### ERROR #####');
          console.log(error);
        }
      ),
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.spinner.hide();
        }
      })
    );
  }
}
