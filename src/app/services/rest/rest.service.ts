import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  //Defined routes
  endpoint = 'http://localhost:3800/command/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'//Defined Headers
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {}; //Define posible response
  }
  
  constructor(private http: HttpClient) { }

  //Function to use parameters and routes
  saveCar(dataCar){
    let params = JSON.stringify(dataCar);
    return this.http.post(this.endpoint + 'addCar', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }


  getCars():Observable<any>{
    return this.http.get(this.endpoint + 'findAllCars', this.httpOptions).pipe(
      map(this.extractData)
    )
  }

  deleteCar(automovilID){
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.delete(this.endpoint + 'deleteCar/' + automovilID, {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  getCar(automovilID){
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'findOneCar/' + automovilID, {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  updateCar(dataCar){
    let params = JSON.stringify(dataCar);
    let automovilID = dataCar.automovilID;
    return this.http.put(this.endpoint + 'updateCarInformation/' + automovilID, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
