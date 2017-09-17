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
  banner1:any;
  banner2:any;
  banner3:any;
  banner4:any;
  catagory1:any;
  catagory2:any;
  catagory3:any;
  catagory4:any;
  product1Data : product1Interface;
  product2Data : product2Interface;
  product3Data : product3Interface;
  product4Data : product4Interface;
  banner1Data : any;
  banner2Data : any;
  banner3Data : any;
  banner4Data : any;
  catagory1Data : any;
  catagory2Data : any;
  catagory3Data : any;
  catagory4Data : any;
  constructor() {
    this.image1 = {};
    this.image2 = {};
    this.image3 = {};
    this.image4 = {};
    this.banner1 = {};
    this.banner2 = {};
    this.banner3 = {};
    this.banner4 = {};
    this.catagory1 = {};
    this.catagory2 = {};
    this.catagory3 = {};
    this.catagory4 = {};
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
    this.banner1Data = {
      banner1Image : '',
      banner1name : '',
      banner1desc : ''
    }
    this.banner2Data = {
      banner2Image : '',
      banner2name : '',
      banner2desc : ''
    }
    this.banner3Data = {
      banner3Image : '',
      banner3name : '',
      banner3desc : ''
    }
    this.banner4Data = {
      banner4Image : '',
      banner4name : '',
      banner4desc : ''
    }
    this.catagory1Data = {
      catagory1Image : '',
      catagory1name : '',
      catagory1desc : ''
    }
    this.catagory2Data = {
      catagory2Image : '',
      catagory2name : '',
      catagory2desc : ''
    }
    this.catagory3Data = {
      catagory3Image : '',
      catagory3name : '',
      catagory3desc : ''
    }
    this.catagory4Data = {
      catagory4Image : '',
      catagory4name : '',
      catagory4desc : ''
    }
   }

  ngOnInit() {
  }
  product1ImageUpload($event) {
    //let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        that.image1.src = loadEvent.target.result;
    };

    myReader.readAsDataURL(file);
}
product2ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.image2.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
product3ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.image3.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
product4ImageUpload($event) {
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
  }
  saveProduct2Data(){
    this.product2Data.product2Image = this.image2.src;
  }
  saveProduct3Data(){
    this.product3Data.product3Image = this.image3.src;
  }
  saveProduct4Data(){
    this.product4Data.product4Image = this.image4.src;
  }

  banner1ImageUpload($event) {
    //let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        that.banner1.src = loadEvent.target.result;
    };
  
    myReader.readAsDataURL(file);
  }
  banner2ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.banner2.src = loadEvent.target.result;
  };
  
  myReader.readAsDataURL(file);
  }
  banner3ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.banner3.src = loadEvent.target.result;
  };
  
  myReader.readAsDataURL(file);
  }
  banner4ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.banner4.src = loadEvent.target.result;
  };
  
  myReader.readAsDataURL(file);
  }
  saveBanner1Data(){
    this.banner1Data.banner1Image = this.banner1.src;
  }
  saveBanner2Data(){
    this.banner2Data.banner2Image = this.banner2.src;
  }
  saveBanner3Data(){
    this.banner3Data.banner3Image = this.banner3.src;
  }
  saveBanner4Data(){
    this.banner4Data.banner4Image = this.banner4.src;
  }
  catagory1ImageUpload($event) {
    //let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        that.catagory1.src = loadEvent.target.result;
    };

    myReader.readAsDataURL(file);
}
catagory2ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.catagory2.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
catagory3ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.catagory3.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
catagory4ImageUpload($event) {
  //let image: any = new Image();
  let file: File = $event.target.files[0];
  let myReader: FileReader = new FileReader();
  let that = this;
  myReader.onloadend = function(loadEvent: any) {
      that.catagory4.src = loadEvent.target.result;
  };

  myReader.readAsDataURL(file);
}
  savecatagory1Data(){
    this.catagory1Data.catagory1Image = this.catagory1.src;
  }
  savecatagory2Data(){
    this.catagory2Data.catagory2Image = this.catagory2.src;
  }
  savecatagory3Data(){
    this.catagory3Data.catagory3Image = this.catagory3.src;
    console.log(this.catagory3Data);
  }
  savecatagory4Data(){
    this.catagory4Data.catagory4Image = this.catagory4.src;
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
