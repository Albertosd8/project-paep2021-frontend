import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : any;

  constructor() {
    this.orders = [
      {
        order_id : '91929',
        products: 'Jarron',
        total : 1029.54,
        register_date : '12 jan 2021',
        delivery_date : '12 may 2021',
        status : 'Inactive'
      }, 
      {
        order_id : '24994',
        products: 'Vaso decorativo',
        total : 1029.54,
        register_date : '12 jan 2021',
        delivery_date : '12 nov 2021',
        status : 'Inactive'
      },
      {
        order_id : '28854',
        products: 'Tapete',
        total : 1029.54,
        register_date : '12 feb 2021',
        delivery_date : '12 mar 2021',
        status : 'Inactive'
      },
      {
        order_id : '12325',
        products: 'Jarron',
        total : 1029.54,
        register_date : '20 jan 2021',
        delivery_date : '18 feb 2021',
        status : 'Active'
      },
      {
        order_id : '12929',
        products: 'Escultura',
        total : 1029.54,
        register_date : '12 nov 2021',
        delivery_date : '12 dec 2021',
        status : 'Inactive'
      },
      {
        order_id : '19242',
        products: 'Jarron',
        total : 1029.54,
        register_date : '12 apr 2020',
        delivery_date : '12 nov 2020',
        status : 'Inactive'
      }
    ]
   }

  ngOnInit(): void {
  }

}
