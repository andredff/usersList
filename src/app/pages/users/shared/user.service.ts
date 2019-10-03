import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";

import { map, catchError } from 'rxjs/operators';

import { User } from './User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User> {
    let query = '?results=10&nat=br';

    return this.http.get<User>(`${this.apiUrl}${query}`).pipe(
      catchError(this.handleError),
      map(this.extractData)
    )
  }

  private handleError(error: any): Observable<User> {
    console.log("ERRO NA REQUISIÇÃO =>", error);
    return throwError(error);
  }

  private extractData(data: any): User {
    let users = data.results;
    return users;
  }

}


