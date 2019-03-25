import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  id: string;

  constructor(public router: Router,public auth: AuthenticationService) { 
    this.id = this.auth.ID
    if(this.id) {
      console.log(this.id)
      this.router.navigateByUrl(`manager/stats/${this.id}`);
    }
   }

  ngOnInit() {
    
  }
  

}
