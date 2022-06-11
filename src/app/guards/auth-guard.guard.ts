import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth: AuthService, private router:Router) { }
  canActivate(): boolean{
    if(this.auth.isAuthenticated == true){
      return true;
    }else{
      return false;
    }
  }
  
}
