import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Components
import { AddCarComponent } from './components/add-car/add-car.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { UserAdministratorComponent } from './components/user-administrator/user-administrator.component';


const routes: Routes = [//Declare routes to components
  {path: '', component: LoginComponent},
  {path: 'userAdministrator', component: UserAdministratorComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'listCars', component: ListCarsComponent},
  {path: 'updateCarInformation', component: UpdateCarComponent},
  {path: 'registerUser', component:RegisterUserComponent},
  {path: 'listUsers', component: ListUsersComponent},
  {path: '**', component: NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
