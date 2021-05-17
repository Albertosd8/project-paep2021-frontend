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
              this.registerSale();
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

  registerSale(){
    let newArray = [];
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let actual_date = year + '-' + month + '-' + day;
    for(let i = 0 ; i < this.number*2 ;i++){
      if(i % 2 == 0){
        newArray.push(this.productsArray[i]);
      }
    }
    const body = JSON.stringify({ 
      user_email: sessionStorage.getItem("current_user_account"),
      products: newArray,
      Total: this.total,
      sale_added_date: actual_date
    });
    return this.http.post('/sales', body, {headers: {'Content-Type': 'application/json'}}).toPromise().then(data =>{
      console.log('venta exitosa');
    }).catch(err => {
      console.log(Object.values(err));
      alert(Object.values(err)[7]);
    });
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
