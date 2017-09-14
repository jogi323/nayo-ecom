import { Component, OnInit } from '@angular/core';

import { ColorsService } from '../../../shared/colors/colors.service';

@Component({
  selector: 'app-activity-reports',
  templateUrl: './activity-reports.component.html',
  styleUrls: ['./activity-reports.component.scss']
})
export class ActivityReportsComponent implements OnInit {

  lat: number = 33.790807;
  lng: number = -117.835734;
  zoom: number = 14;
  scrollwheel = false;

  sparkOptions1 = {
      barColor: this.colors.byName('primary'),
      height: 20,
      barWidth: 3,
      barSpacing: 2
  };

  sparkOptions2 = {
      type: 'line',
      height: 80,
      width: '100%',
      lineWidth: 2,
      lineColor: '#dddddd',
      spotColor: '#bbbbbb',
      fillColor: '',
      highlightLineColor: '#fff',
      spotRadius: 3,
      resize: true
  };

  sparkOptions3 = {
      barColor: '#fff',
      height: 50,
      barWidth: 6,
      barSpacing: 6
  };

  sparkOptions4 = {
      barColor: this.colors.byName('primary'),
      height: 30,
      barWidth: 6,
      barSpacing: 6
  };

  
    // Bar chart
    // -----------------------------------

    barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
          }, {
              data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
          }]
  };

  barColors = [
      {
          backgroundColor: this.colors.byName('info'),
          borderColor: this.colors.byName('info'),
          pointHoverBackgroundColor: this.colors.byName('info'),
          pointHoverBorderColor: this.colors.byName('info')
      }, {
          backgroundColor: this.colors.byName('primary'),
          borderColor: this.colors.byName('primary'),
          pointHoverBackgroundColor: this.colors.byName('primary'),
          pointHoverBorderColor: this.colors.byName('primary')
      }];

  barOptions = {
      scaleShowVerticalLines: false,
      responsive: true
  };


  constructor(public colors: ColorsService) { }

  ngOnInit() {
  }

  // random values for demo
  rFactor() {
    return Math.round(Math.random() * 100);
};

}
