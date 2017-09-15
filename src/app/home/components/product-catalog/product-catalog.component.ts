import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  valForm: FormGroup;
  styles:any[];
  colors:any[];
  brands:any[];
  models:any[];
  products:any[];

  constructor(fb: FormBuilder, public settings: SettingsService) {
      // Model Driven validation
      this.valForm = fb.group({
          'style': [{value:null, disabled:false}, Validators.required],
          'color': [{value:null, disabled:false}, Validators.required],
          'brand': [{value:null, disabled:false}, Validators.required],
          'model': [{value:null, disabled:false}, Validators.required]
      });
      this.styles=[
          {id:"0",name:"dotted"},
          {id:"1",name:"striped"},
          {id:"2",name:"checks"},
          {id:"3",name:"lined"},
          {id:"4",name:"solid"},
          {id:"5",name:"plain"}
        ]
        this.colors=[
            {id:"0",name:"pink",selected:false},
            {id:"1",name:"inverse",selected:false},
            {id:"2",name:"purple",selected:false},
            {id:"3",name:"green",selected:false},
            {id:"4",name:"warning",selected:false},
            {id:"5",name:"info",selected:false},
            {id:"6",name:"success",selected:false},
            {id:"7",name:"primary",selected:false},
            {id:"8",name:"danger",selected:false},
          ]
        this.brands=[
            {id:"0",name:"audi"},
            {id:"1",name:"honda"},
            {id:"2",name:"maruti"},
            {id:"3",name:"benz"},
            {id:"4",name:"merc"}
        ]
        this.products=[
            {id:"0",name:"swift",colo:"red",image:"p0.png"},
            {id:"1",name:"civic",color:"white",image:"p1.png"},
            {id:"2",name:"brio",color:"green",image:"p2.png"},
            {id:"3",name:"verna",color:"blue",image:"p3.png"},
            {id:"4",name:"indica",color:"black",image:"p1.png"},
            {id:"5",name:"polo",color:"yellow",image:"p0.png"}
        ]
        this.models=[
            {id:"0",name:"2017"},
            {id:"1",name:"2016"},
            {id:"2",name:"2015"},
            {id:"3",name:"2014"},
            {id:"4",name:"2013"},
            {id:"5",name:"2012"}
        ]
  }

  public styleSelected(event){
    this.products=[
        {id:"0",name:"swift",color:"red"},
        {id:"1",name:"civic",color:"white"},
        {id:"2",name:"brio",color:"green"},
        {id:"3",name:"verna",color:"blue"},
        {id:"4",name:"indica",color:"black"},
        {id:"5",name:"polo",color:"yellow"},
        {id:"5",name:"vent",color:"brown"},
        {id:"5",name:"kwid",color:"blue"}
    ]
  }

  public colorSelected(color, event:any){
    //   event.preventDefault();
    //   if(event.target.classList.contains('currentColor')){
    //       console.log("hai");
    //       this.render.setElementClass(this.elementRef.nativeElement,"currentColor",false);
    //   }
    //   this.render.setElementClass(event.target,"currentColor",true);
    this.colors[color].selected = !this.colors[color].selected;
      this.products=[
        {id:"0",name:"swift",color:color ,image:"p0.png"},
        {id:"1",name:"civic",color:color,image:"p1.png"},
        {id:"4",name:"indica",color:color,image:"p1.png"},
        {id:"5",name:"polo",color:color,image:"p0.png"}
    ]
  }
  public brandSelected(event){
    this.products=[
        {id:"0",name:"swift",color:"blue",image:"p0.png"},
        {id:"1",name:"civic",color:"red",image:"p1.png"},
        {id:"4",name:"indica",color:"black",image:"p1.png"},
        {id:"5",name:"polo",color:"yellow",image:"p0.png"}
    ]
    
  }
  public modelSelected(event){
    this.products=[
        {id:"0",name:"swift",color:"red"},
        {id:"1",name:"civic",color:"white"},
        {id:"2",name:"brio",color:"green"},
        {id:"3",name:"verna",color:"blue"},
        {id:"4",name:"indica",color:"black"},
        {id:"5",name:"polo",color:"yellow"}
    ]
  }

  submitForm($ev, value: any) {
      $ev.preventDefault();
      for (let c in this.valForm.controls) {
          this.valForm.controls[c].markAsTouched();
      }
      if (this.valForm.valid) {
          console.log('Valid!');
      }
      console.log(value);
  }

  

  ngOnInit() {
  }


}
