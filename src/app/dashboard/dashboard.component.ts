import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('lgModal') modal;
  constructor() { }

  ngOnInit() {
  }
  showModal(value){
    console.log(value);
    //this.modal.show();
  }
}
