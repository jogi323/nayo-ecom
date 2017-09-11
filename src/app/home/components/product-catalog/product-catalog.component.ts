import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { SettingsService } from '../../../shared/services/settings/settings.service';

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


  }

  public styleSelected(event){
    this.colors=[
        {id:"0",name:"blue"},
        {id:"1",name:"green"},
        {id:"2",name:"black"},
        {id:"3",name:"red"},
        {id:"4",name:"white"},
        {id:"5",name:"green"}
    ]
  }

  public colorSelected(event){
    this.brands=[
        {id:"0",name:"audi"},
        {id:"1",name:"honda"},
        {id:"2",name:"maruti"},
        {id:"3",name:"benz"},
        {id:"4",name:"merc"}
    ]
  }
  public brandSelected(event){
    this.models=[
        {id:"0",name:"2017"},
        {id:"1",name:"2016"},
        {id:"2",name:"2015"},
        {id:"3",name:"2014"},
        {id:"4",name:"2013"},
        {id:"5",name:"2012"}
    ]
  }
  public modelSelected(event){
    this.products=[
        {id:"0",name:"swift",colo:"red"},
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
