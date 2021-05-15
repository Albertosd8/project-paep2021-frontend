import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product_name = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  color = new FormControl('');
  weight = new FormControl('');
  principal_img = new FormControl('');
  name_artisan = new FormControl('');
  tags = [];

  counter(i: number){
    return new Array(i);
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const body = JSON.stringify({ 
      product_name: this.product_name.value,
      price:this.price.value,
      quantity : '1',
      description:(this.description.value),
      color: this.color.value,
      weight: this.weight.value,
      principal_img: this.principal_img.value,
      optional_image1: 'link for 2 image',
      optional_image2: 'link for 3 image',
      name_artisan: this.name_artisan.value,
      tags: this.tags
    });
    return this.http.post('/products', body, {headers: {'Content-Type': 'application/json'}}).toPromise().then(data =>{
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
    this.router.navigate(['prodadmin-component']);
  }


}
