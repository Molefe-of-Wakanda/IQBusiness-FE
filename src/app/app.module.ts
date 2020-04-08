import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome';
import { AlertComponent } from './alert';
import { RegisterComponent } from './register';
import { RegistrationsComponent } from './registrations';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    WelcomeComponent,
    RegisterComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }