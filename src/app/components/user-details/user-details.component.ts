import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  fullUser: User;
  constructor(private router: Router) {
    this.fullUser = router.getCurrentNavigation()?.extras.state as User;
  }

  ngOnInit(): void {
  }

}
