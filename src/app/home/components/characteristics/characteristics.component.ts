import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  characteristics:any[];
  currentCharacteristicId:number=0;
  selectedCharacteristic:number;
  showProductDetails = false;

  toggleShowProductDetails() {
    this.showProductDetails = !this.showProductDetails;
  }

  constructor(public settings:SettingsService) { 
    this.characteristics=[
      { id:"1",
        description:"vechile identification number",
        value:[
          {charValu:"1231", valueDesc:"abcd",pricing:"100",status:''},
          {charValu:"8888", valueDesc:"abc",pricing:"600",status:''},
          {charValu:"9999", valueDesc:"abd",pricing:"1000",status:''}
        ]
      },
      {
        id:"2",
        description:"paint code",
        value:[
          {charValu:"a3da", valueDesc:"abcd",pricing:"200",status:''},
          {charValu:"678", valueDesc:"fvdg",pricing:"400",status:''}
        ]
      },
      {
        id:"3",
        description:"door",
        value:[
        ]
      },
      {
        id:"4",
        description:"front options",
        value:[
          {charValu:"234", valueDesc:"gyth",pricing:"",status:''}
        ]
      },
      {id:"5",description:"interior options",value:[]},
      {id:"6",description:"passenger side door",value:[{charValu:"8907", valueDesc:"fgtyh",pricing:"1000",status:''}]},
      {id:"7",description:"driver side door",value:[]},
      {id:"8",description:"interior lights",value:[{charValu:"0987", valueDesc:"hbgyt",pricing:"2000",status:''}]},      
    ]
  }

  showVlaues(event,index){
    this.currentCharacteristicId = index;
  }
  selectCharacteristic(){
    for(var i=0; i<this.characteristics[this.currentCharacteristicId].value.lenght;i++){
        this.characteristics[this.currentCharacteristicId].value[i].status = '';
    }
    this.characteristics[this.currentCharacteristicId].value[this.selectedCharacteristic].status = 'selected';
    this.selectedCharacteristic=null;
  }
  findSelectedCharacteristicValue(index){
    for(var i=0; i<this.characteristics[index].value.length;i++){
      if(this.characteristics[index].value[i].status == 'selected'){
        return this.characteristics[index].value[i].charValu;
      }
    }
  }
  findSelectedCharacteristicDesc(index){
    for(var i=0; i<this.characteristics[index].value.length;i++){
      if(this.characteristics[index].value[i].status == 'selected'){
        return this.characteristics[index].value[i].valueDesc;
      }
    }
  }
  findSelectedCharacteristicPricing(index){
    for(var i=0; i<this.characteristics[index].value.length;i++){
      if(this.characteristics[index].value[i].status == 'selected'){
        return this.characteristics[index].value[i].pricing;
      }
    }
  }
  ngOnInit() {
  }

}
