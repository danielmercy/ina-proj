import { Component, OnInit } from '@angular/core';
import { Router,  } from "@angular/router";
import { AuthenticationService } from 'src/app/core/services/authentication.service';

interface User {
  id: string;
  name: string;
  avatar: string
}

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  id: string;
  isLoggedIn: boolean;
  path: string;
  url: Array<any>;
  user: User;

  menus: Array<Object>;

  constructor(public router: Router,public auth: AuthenticationService) { 
  
   }

  ngOnInit() {

    this.user = this.auth.currentUser;
    this.id = this.auth.ID;
    this.isLoggedIn = this.auth.isAuthenticated;
    this.url = this.router.url.split('/');
    this.url.length > 2 ? this.path = this.url[2] : this.path = 'stats'
    console.log(this.url);

    this.menus = [
      {
        title: 'Monitor',
        icon: 'stats',
        link: `stats/${this.id}`
      },{
        title: 'Profile',
        icon: 'dashboard',
        link: `profile/${this.id}`
      },{
        title: 'Settings',
        icon: 'setting',
        link: `settings/${this.id}`
      }
    ]
    

    if(this.id && this.isLoggedIn) {
      console.log(this.path)
      this.path ? this.router.navigateByUrl(`manager/${this.path}/${this.id}`) : this.router.malformedUriErrorHandler;
    }
  }
  

}
