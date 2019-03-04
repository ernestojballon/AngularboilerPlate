import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//angular material

import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngx
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

//services utils
import { HttpClientModule, HttpClient , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from 'src/app/services/utils/error-interceptor.service';
import { FieldValidatorService } from 'src/app/services/utils/field-validator.service';
import { AuthGuardGuard } from './services/utils/auth.guard';

//components
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/index/index.component';
import { LoginComponent } from './modules/index/login/login.component';
import { NewAccountComponent } from './modules/index/new-account/new-account.component';
import { RecentLogComponent } from './modules/index/recent-log/recent-log.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NewAccountComponent,
    RecentLogComponent
    
  ],
  imports: [
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [FieldValidatorService, AuthGuardGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
