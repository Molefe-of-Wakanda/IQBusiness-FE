import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register';
import { RegistrationsComponent } from './registrations';
import { WelcomeComponent } from './welcome/';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'registrations', component: RegistrationsComponent },
  { path: 'welcome', component: WelcomeComponent },
  
  // otherwise redirect to the welcome component
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }