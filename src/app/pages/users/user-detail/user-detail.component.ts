import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './../shared/data.service';

import { User } from '../shared/User.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  fullname: string;
  street: string;

  constructor(private dataService: DataService) {
   }

  ngOnInit() {

    this.user = this.dataService.getUser();

    this.fullname = `${this.user.name.first}  ${this.user.name.last}`;
    let location = this.user.location;
    this.street = `${location.street.name} ${location.street.number}, ${location.city}/${location.state}`;

  }

}
