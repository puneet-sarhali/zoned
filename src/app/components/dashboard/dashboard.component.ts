import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private uService: UserService, public auth: AuthService) { 
    this.uService.getUserData("1234");
    this.uService.setUserData(auth.userId || "Unknown")
  }

  ngOnInit(): void {
    
  }

  onSignout(){
    this.auth.signout();
  }

}
