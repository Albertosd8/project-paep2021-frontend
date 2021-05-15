import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersArray:any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/users').subscribe((users) => this.usersArray = users);
  } 


}
