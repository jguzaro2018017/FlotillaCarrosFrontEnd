import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars = [];

  constructor(private restCar: RestService, private router: Router) { }

  ngOnInit(): void { //Executable Function
    this.getCars(); 
  }


  //Function to get all registers of table CarInformation
  getCars(){
    this.restCar.getCars().subscribe(res =>{
      this.cars = res.cars;
    })
  }

  //Function to delete register of table CarInformation
  deleteCar(automovilId: number){
    this.restCar.deleteCar(automovilId).subscribe((res:any)=>{
      if(res.message){
        alert(res.message);
        this.getCars();
      }else{
        alert('Error desconocido')
      }
    })
  }

  //Function to save the car data in the Local Storage
  updateCar(automovilID: number){
    this.restCar.getCar(automovilID).subscribe((res:any)=>{
      if(res.message){
        alert('carro encontrado');
        localStorage.setItem('car', JSON.stringify(res.car[0]));
        this.router.navigateByUrl('updateCarInformation');
      }else{
        alert('Error desconocido');
      }
    })
  }


}
