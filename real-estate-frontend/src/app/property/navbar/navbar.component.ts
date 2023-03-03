import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  loggedInUser : string = '';
  constructor (
    private alertify : AlertifyService
     ) {};

  ngOnInit(): void {

  }

  loggedin() {
    this.loggedInUser =  localStorage.getItem('token') as string;
    return this.loggedInUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('Logged out successfully');
  }
}
