import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//Import Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserAdministratorComponent } from './components/user-administrator/user-administrator.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { DeleteCarComponent } from './components/delete-car/delete-car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
//Import Services
import { RestService } from './services/rest/rest.service';
import { RestUserService } from './services/rest-user.service';
import { ListUsersComponent } from './components/list-users/list-users.component';


@NgModule({
  declarations: [//Declarartion Components
    AppComponent,
    LoginComponent,
    UserAdministratorComponent,
    AddCarComponent,
    ListCarsComponent,
    UpdateCarComponent,
    DeleteCarComponent,
    NavbarComponent,
    RegisterUserComponent,
    ListUsersComponent,
  ],
  imports: [//Declaration Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [//Declaration Service
    RestService,
    RestUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
