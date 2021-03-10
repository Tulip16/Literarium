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

  fees = {
    "comp1": 5000, "comp2": 4000, "comp3": 3000
  };

  actual = {
    "comp1": 50, "comp2": 40, "comp3": 30
  };
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

  options = {
    "key": "rzp_test_5Lz5R6IT16a7hJ", // Enter the Key ID generated from the Dashboard
    "amount": "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Please choose a competition first!",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": 'http://127.0.0.1:8000/success/',
    "prefill": {
        "name": "first_name last_name",
        "email": "emailid@example.com",
        "contact": "9********9"
    },
    "notes": {
        "address": "IIT Bombay"
    },
    "theme": {
        "color": "#3399cc"
    }
};
rzp1;
pay(){
  this.options["name"] = this.compControl.value;
  this.options["amount"] = this.fees[this.compControl.value];
  this.login.pay(this.fees[this.compControl.value]).subscribe(details => {console.log(details); this.options["order_id"] = details['id']});
  this.rzp1 = new this.login.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
  

}

}
