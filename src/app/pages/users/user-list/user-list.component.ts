import { Component, OnInit } from '@angular/core';
import sortBy from 'lodash/sortBy';

import { UserService } from '../shared/user.service';
import { DataService } from './../shared/data.service';

import { Router } from '@angular/router';
import { User } from '../shared/User.interface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(private userService: UserService, private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.getAll();

  }

  getAll() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = sortBy(users, 'name.first');
      },
      error => alert('Aconteceu um erro imprevisto, tente novamente mais tarde')
    )
  }

  orderByName() {
    this.users.reverse();
  }

  goToDetalhesByState(user: User) {
    this.dataService.setUser(user);
    this.router.navigateByUrl('/users/details', {
      state: { user }
    })
  }

}
