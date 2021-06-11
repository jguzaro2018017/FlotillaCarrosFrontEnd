import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/rest-user.service';
import { UserModel } from 'src/app/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: UserModel

  constructor(private restUser: RestUserService, private router: Router) { 
    this.user = new UserModel(0, '','','','','',0,'','','','');
  }

  ngOnInit(): void {
  }

  registerUser(){
    if(this.user.userID != 0 && this.user.DPI != '' && this.user.username != '' && this.user.nameU != '' &&  this.user.lastnameU != '' && this.user.hiringDate != '' &&
      this.user.age != 0 && this.user.phoneNumber && this.user.email != '' && this.user.passwordU != '' && this.user.rol != ''){
      this.restUser.register(this.user).subscribe((res:any)=>{
        if(res.message){
          alert(res.message);
        }else if(res.user){
          alert('Nuevo Usuario Registrado');
          this.router.navigateByUrl('userAdministrator');
        }else{
          alert('Ha ocurrido un error desconocido, intentalo mas tarde');
        }
      })
    }else{
      alert('Ingresa todos los datos minimos para registrarte');
    }
  }

}
