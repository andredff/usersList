import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";

import { map, catchError, flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    let query = '?results=10&nat=br';

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
    console.log(data)
    let users = data.results;
    return users;
  }



}


