import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  password2 = new FormControl('');
  user_type = "USER";
  birthdate_month = new FormControl('');
  birthdate_day = new FormControl('');
  birthdate_year = new FormControl('');

  counter(i: number){
    return new Array(i);
  }

  onSubmit() {
    const body = JSON.stringify({ 
      name: this.name.value,
      lastname:this.lastname.value,
      email:(this.email.value).toLowerCase(),
      password: this.password.value,
      birth_date: this.birthdate_year.value + '-' + this.birthdate_month.value + '-' + this.birthdate_day.value,
      shopping_history: [],
      rol: this.user_type
    });
    return this.http.post('http://localhost:3000/users', body, {headers: {'Content-Type': 'application/json'}}).toPromise().then(data =>{
      alert('registro exitoso!');
      console.log('registro exitoso'+ data);
      this.redirect();
    })
    .catch(err => {
      console.log(Object.values(err));
      alert(Object.values(err)[7]);
      window.location.reload();
    });
  }

  redirect() {
    this.router.navigate(['field-component']);
  }

  constructor(private http: HttpClient, private router: Router) {
   }

  ngOnInit(): void {
  }

}
