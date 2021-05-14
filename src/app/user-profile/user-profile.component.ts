import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name = "";
  lastname = "";
  email = sessionStorage.getItem("current_user_account");
  birth_date = "";
  rol = "";

  logOut(){
    localStorage.removeItem("token");
    sessionStorage.removeItem("current_user_account");
    this.ChangeMenuLogOutAdmin();
    this.redirect();
  }

  ChangeMenuLogOutAdmin(){
    const menu_admin= document.getElementById('nav-bar-id-admin');
    const menu= document.getElementById('nav-bar-id');
    menu_admin.style.display = 'none';
    menu.style.display = '';
  }

  redirect() {
    this.router.navigate(['field-component']);
  }

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    const url = 'http://localhost:3000/users/'+ this.email;
      this.http.get(url).subscribe(
        (user) => {
          this.name = Object.values(user)[2];
          this.lastname = Object.values(user)[3];
          this.birth_date = Object.values(user)[6];
          this.birth_date = this.birth_date.substring(0,10);
          this.rol = Object.values(user)[7];
        })
  }

}
