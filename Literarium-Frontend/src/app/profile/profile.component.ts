import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  compis = [
    'comp1','comp2', 'comp3'
  ];

  compControl = new FormControl();

  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

  logout() : void{
    this.login.logout().subscribe( details => 
      {
          alert("User Logged out succesfully!");
          window.location.href = './login'
      });
  }

}
