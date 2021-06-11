import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { RestUserService } from 'src/app/services/rest-user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userLogin;

  constructor(private rest: RestService, private restUser: RestUserService, private router: Router) { 
    this.userLogin = {
      email: '',
      passwordU: '',
      gettoken: 'true'
    }
  }

  ngOnInit(): void { }

  onSubmit(){ //Function to Sign In
    if(this.userLogin.email != ''){
      if(this.userLogin.password != ''){//Validation for empty fields
        this.restUser.login(this.userLogin).subscribe((res:any)=>{
          if(res.message){
            alert(res.message);
          }else if(res.token){
            localStorage.setItem('tokenUsers', res.token);//set token in Local Storage
            res.users.passwordU = '';//Set Password Empty
            localStorage.setItem('users', JSON.stringify(res.users));//Parse Json data user
            sessionStorage.setItem('tokenUsers', res.token);
            alert('Bienvenido '+ res.users.username);
            this.router.navigateByUrl('userAdministrator');//redirect User Administrator Page, after Sign In
          }else{
            alert('Ha ocurrido un error')
          }
        });
      }else{
        alert('Ingrese una contraseña')
      }
    }else{
      alert('Ingrese un Correo electronico')
    }
  }
}
