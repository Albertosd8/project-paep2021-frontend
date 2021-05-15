import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product : any;
  shoppincartproducts: any;

  constructor(private http: HttpClient, private router: Router) { }

  addProduct_tocart(){
    let counter_products = sessionStorage.getItem("shoppingcart");
    counter_products = (parseInt(counter_products,10) + 1).toString();
    sessionStorage.removeItem("shoppingcart");
    sessionStorage.setItem("shoppingcart",counter_products);

    if(sessionStorage.getItem("shoppingcart_products"))
    {
        let newArray = sessionStorage.getItem("shoppingcart_products");
        newArray = newArray + "," + this.product[2]+","+this.product[3];
        sessionStorage.removeItem("shoppingcart_products");
        sessionStorage.setItem("shoppingcart_products", newArray);
    }else{
        let products_Array_forshoppingcart = this.product[2]+","+this.product[3];
        sessionStorage.setItem("shoppingcart_products", products_Array_forshoppingcart);
    }
    sessionStorage.removeItem("currentItem");
    alert('Producto agregado a tu carro de compras');
    this.redirect();
  }

  ngOnInit(): void {
    this.product = '';
    const url = '/products'+'/'+sessionStorage.getItem("currentItem");
    this.http.get(url).subscribe((product_data) => {this.product = Object.values(product_data);
    });
  }

  redirect() {
    sessionStorage.removeItem("currentItem");
    this.router.navigate(['products-component']);
  }

}
