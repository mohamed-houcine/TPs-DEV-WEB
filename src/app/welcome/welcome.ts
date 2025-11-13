import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isLoggedIn:boolean=false;

  toggleIsLoggedIn(){
    this.isLoggedIn=!this.isLoggedIn;
  }

}
