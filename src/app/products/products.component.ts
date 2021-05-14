import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsArray: any;
  pagenumber: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.productsArray = '';
    this.http.get('http://localhost:3000/products').subscribe((products) => 
    {this.productsArray = Object.values(products);});
    if(!this.pagenumber){
      this.pagenumber = 1;
    }
  }

  updatePageNumber(){
    this.pagenumber = this.pagenumber+1;
    let num = this.pagenumber;
  }

  setProductID(id){
    if(sessionStorage.getItem("currentItem")){
      sessionStorage.removeItem("currenItem");
      sessionStorage.setItem("currentItem",id);
    }
    sessionStorage.setItem("currentItem",id);
  }

  filterbyColor(color){
      let filterbyColorArray = [];
      for(let i = 0; i < this.productsArray.length; i++){
        if(this.productsArray[i].color === color){
          filterbyColorArray.push(this.productsArray[i])
        }
      };
      this.productsArray = filterbyColorArray;
  }

  getProducts(x){
    this.pagenumber = x;
    let number_prod = "";
    if(this.pagenumber == 1){
      number_prod = "0";
    }else{
      number_prod = (parseInt(this.pagenumber,10) + 10).toString();
    }
    const param = {params: {skip:number_prod}};
    this.http.get('http://localhost:3000/products',param).subscribe((products) => {
      this.productsArray = Object.values(products);
    });
  }

}
