import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../Service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  invalid = false;
  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
        this.router.navigate(["welcome",this.username])
    }
    else {
      this.invalid = true;
      this.username="";
      this.password="";
    }

  }


}
