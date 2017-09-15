import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  image1:any;
  image2:any;
  image3:any;
  image4:any;
  product1Data : product1Interface;
  product2Data : product2Interface;
  product3Data : product3Interface;
  product4Data : product4Interface;

  constructor() {
    this.image1 = {};
    this.image2 = {};
    this.image3 = {};
    this.image4 = {};
    this.product1Data = {
      product1Image : '',
      product1name : '',
      product1desc : ''
    }
    this.product2Data = {
      product2Image : '',
      product2name : '',
      product2desc : ''
    }
    this.product3Data = {
      product3Image : '',
      product3name : '',
      product3desc : ''
    }
    this.product4Data = {
      product4Image : '',
      product4name : '',
      product4desc : ''
    }
   }

  ngOnInit() {
  }
  fileChangeListener($event) {
    //let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        that.image1.src = loadEvent.target.result;
    };

    myReader.readAsDataURL(file);
}
fileChangeListener2($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.image2.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
fileChangeListener3($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.image3.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
fileChangeListener4($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.image4.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
  saveProduct1Data(){
    this.product1Data.product1Image = this.image1.src;
    console.log(this.product1Data);
  }
  saveProduct2Data(){
    this.product2Data.product2Image = this.image2.src;
    console.log(this.product2Data);
  }
  saveProduct3Data(){
    this.product3Data.product3Image = this.image3.src;
    console.log(this.product3Data);
  }
  saveProduct4Data(){
    this.product4Data.product4Image = this.image4.src;
    console.log(this.product4Data);
  }
}

export interface product1Interface {
  product1Image : String,
  product1name : String,
  product1desc : String
}

export interface product2Interface {
  product2Image : String,
  product2name : String,
  product2desc : String
}

export interface product3Interface {
  product3Image : String,
  product3name : String,
  product3desc : String
}

export interface product4Interface {
  product4Image : String,
  product4name : String,
  product4desc : String
}
