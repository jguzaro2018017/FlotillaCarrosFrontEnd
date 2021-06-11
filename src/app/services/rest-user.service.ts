import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestUserService {
  endpoint = 'http://localhost:3800/users/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',//Defined Headers
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {}; //Define posible response
  }
  constructor(private http: HttpClient) { }

  //Function to use parameters and routes
  login(dataUser){
    let params = JSON.stringify(dataUser);
    return this.http.post(this.endpoint + 'login', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  register(dataUser){
    let params = JSON.stringify(dataUser);
    return this.http.post(this.endpoint + 'registerUser', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
    
  getUsers():Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'findAllUsers', {headers: headers}).pipe(
      map(this.extractData)
    )
  }
}
