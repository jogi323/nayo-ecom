import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  public slides: Array<any> = []
  constructor() { 
     // init carousel
        this.addSlide(4);
        this.addSlide(7);
        this.addSlide(8);
  }

  ngOnInit() {
  }
  // CAROUSEL METHODS
    public addSlide(id = 8): void {
        this.slides.push({
            image: 'assets/img/bg' + id + '.jpg',
            text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
        });
    }

}
