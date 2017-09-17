import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { ModelsModule } from './models/models.module';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    CommonsModule,
    AuthModule,
    ModelsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
