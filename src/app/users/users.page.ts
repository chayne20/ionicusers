import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.usersService.users().subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

}
