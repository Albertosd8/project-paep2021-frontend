import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  productsArray: any;
  number: any;
  total:any;

  emptyShoppingCar(){
    this.productsArray = [];
    this.number = 0;
    this.total = 0;
    sessionStorage.removeItem("shoppingcart");
    sessionStorage.setItem("shoppingcart","0");
    sessionStorage.removeItem("shoppingcart_products");
    this.router.navigate(['products-component']);
  }

  completeTransactionShoppingCart(){
        if(sessionStorage.getItem("current_user_account")){
              alert('Compra realizada exitosa por '+ sessionStorage.getItem("current_user_account"));
              this.router.navigate(['products-component']);
              sessionStorage.removeItem("shoppingcart_products");
              sessionStorage.removeItem("shoppingcart");
              sessionStorage.setItem("shoppingcart","0");
        }else{
            alert('inicia sesión para realizar compra');
            this.router.navigate(['field-component']);
        }
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.productsArray = [];
    this.total = 0;
    this.number = 0;
    let counter = 0;
    this.number = sessionStorage.getItem("shoppingcart");
    if(sessionStorage.getItem("shoppingcart_products")){
      let newArray = sessionStorage.getItem("shoppingcart_products");
    this.productsArray = (newArray).split(",");
    }
    if(sessionStorage.getItem("shoppingcart_products")){
      for(let i = 0; i < (this.number*2); i++){
      if(i % 2 != 0){
        counter += parseInt(this.productsArray[i]);
      }
      this.total = counter;
    }
    }
    
  }

}
