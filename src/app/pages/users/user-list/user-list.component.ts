import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

this.getAll();

  }

  getAll(){
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
        console.log(this.users)

        // return this.users;
      },
      // error => alert('ERRO')
    )
  }

  showUser(event){
    console.log(event);
  }

}
