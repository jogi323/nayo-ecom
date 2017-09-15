import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showmodal:boolean;
  @ViewChild('lgModal') modal;
  constructor() { }

  ngOnInit() {
  }
  showModal(value){
    console.log(value);
    this.showmodal = true;
    this.modal.show();
  }
}
