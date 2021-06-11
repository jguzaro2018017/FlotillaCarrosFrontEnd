import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  car ; //Variable Car Declaration
  
  constructor(private restCar: RestService, private router: Router) {
    this.car = JSON.parse(localStorage.getItem('car'))//Set Array data and Parse JSON
  }

  ngOnInit(): void {
    
  }

  onSubmit(){//Function to Update Data
    this.restCar.updateCar(this.car).subscribe((res:any)=>{
      if(res.car){
        alert('Usuario Actualizado');
        this.router.navigateByUrl('listCars');
      }else{
        alert('Usuario no actualizado, intentalo mas tarde')
      }
    });
  }

}
