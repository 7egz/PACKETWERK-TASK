import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  person:any;
  selectedOne: any;
  visible = false;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.person = this.userService.getAll();
  }

  selectUser(item){
    this.selectedOne = item;
    this.visible = true;
  }
}
