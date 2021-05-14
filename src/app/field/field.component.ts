import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  User: any;
  email = new FormControl('');
  password = new FormControl('');

  LoginUser() {
    //this.getUser();
    const body = JSON.stringify({ 
      email:(this.email.value).toLowerCase(),
      password: this.password.value});
    return this.http.post('http://localhost:3000/login', body, {headers: {'Content-Type': 'application/json'}}).toPromise()
    .then(data =>{
      let token = Object.values(data);
      let email = this.email.value.toLowerCase();
      localStorage.setItem("token",token[0]);
      sessionStorage.setItem("current_user_account",email);
      this.ChangeMenu();
      this.router.navigate(['userprofile-component']);
      ;})
    .catch(err => alert('Acceso no autorizado'));
  }

  ChangeMenu(){
    const menu_admin= document.getElementById('nav-bar-id-admin');
    const menu= document.getElementById('nav-bar-id');
    if(sessionStorage.getItem("current_user_account")=="artisan_admin@artisan.com"){
      menu_admin.style.display = ''; 
      menu.style.display = 'none';
    }else{
      menu_admin.style.display = 'none';
      menu.style.display = '';
    }
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("current_user_account")){
      this.router.navigate(['userprofile-component']);
    }
  }

}
