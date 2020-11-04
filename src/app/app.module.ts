import { CoreModule } from './core/core.module';
import { GlobalHttpInterceptorService } from './shared/interceptors/globalhttp.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, NgxSpinnerModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
