import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/car-model';
import { RestService } from 'src/app/services/rest/rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  car: CarModel;


  constructor(private rest: RestService, private router: Router) { 
    this.car = new CarModel(0, '','','','','');
  }

  ngOnInit(): void {
  }
  //Function of Button for Register Car
  submit(){
    if(this.car.automovilID != 0 && this.car.placa != '' && this.car.marca != '' && this.car.modelo != '' &&  this.car.anio != '' && this.car.estado != ''){
          this.rest.saveCar(this.car).subscribe((res:any)=>{
            if(res.err){
              alert(res.err);
            }else if(res.message){
              alert('Carro registrado');
              this.router.navigateByUrl('userAdministrator');
            }else{
              alert('Ha ocurrido un error desconocido, intentalo mas tarde');
            }
          })
    }else{
      alert('Ingresa todos los datos minimos para registrarte')
    }
  }

}
