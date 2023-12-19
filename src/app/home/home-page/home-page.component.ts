import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router){}
  
  navigate(){
    this.router.navigate(['/login'])
  }

}
