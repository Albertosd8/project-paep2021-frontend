import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  salesArray: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/sales').subscribe((sales) => this.salesArray = sales);
  }

}
