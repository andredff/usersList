import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";

import { map, catchError, flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // users: User = new User();
  // https://randomuser.me/api/?results=50&nat=br,

  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<any> {
    let query = '?results=5&nat=br';

    return this.http.get(`${this.apiUrl}${query}`).pipe(
      catchError(this.handleError),
      map(this.extractData)
    )
  }


  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO =>", error);
    return throwError(error);
  }

  private extractData(data) {
    let users = data.results;
    return users;
  }



}


