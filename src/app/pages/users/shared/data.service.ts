import { Injectable } from '@angular/core';

import { User } from './User.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user: User;

  constructor() { }

  public setUser(user: User) {
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUser() {
    this.user = JSON.parse(localStorage.getItem('user'))
    return this.user;
  }

}
