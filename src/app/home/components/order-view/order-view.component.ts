import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  lat: number = 33.790807;
  lng: number = -117.835734;
  zoom: number = 14;
  scrollwheel = false;
  
  constructor() { }

  ngOnInit() {
  }

}
