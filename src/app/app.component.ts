import { Component } from '@angular/core';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent {
  title = 'project-app';
  email = sessionStorage.getItem("current_user_account");

  ngOnInit(): void {
    if(!sessionStorage.getItem("shoppingcart")){
      sessionStorage.setItem("shoppingcart",'0');
    }
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
  
}
