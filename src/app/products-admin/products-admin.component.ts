import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  productsArray: any;
  closeResult: string;

  constructor(private http: HttpClient)  { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/products').subscribe((products) => this.productsArray = products);
  }

  deleteProduct(product_id, index){
    this.http.delete('http://localhost:3000/products'+ '/' + product_id).subscribe(
      ()=>{this.productsArray.splice(index,1);
    });}
  

}
