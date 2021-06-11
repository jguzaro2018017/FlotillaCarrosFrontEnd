import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/rest-user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: []
  constructor(private restUser: RestUserService, private router: Router) { }

  ngOnInit(): void {//Executable function
    this.getUser();
  }

  getUser(){
    this.restUser.getUsers().subscribe(res =>{
      this.users = res.users
    })
  }

}
