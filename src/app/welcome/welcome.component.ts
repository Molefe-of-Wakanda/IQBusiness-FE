import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  
  constructor(
    private router: Router,
  ) { }
  
  loadURI(uriLocation: string) {
    this.router.navigate([uriLocation]);
  }
}