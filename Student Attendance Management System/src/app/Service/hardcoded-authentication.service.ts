import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password)
  {
    if(username==="kannan" && password==="123")
    {
      sessionStorage.setItem("authenticatedUser",username);
      return true
    }
    else
    {
      return false
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem("authenticatedUser")
    return !(user===null);
  }

  isUserLoggedOut(){
    sessionStorage.removeItem("authenticatedUser")
  }

}
