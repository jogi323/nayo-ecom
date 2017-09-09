import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  characteristics:any[];

  constructor(public settings:SettingsService) { 
    this.characteristics=[
      { id:"0",
        description:"vechile identification number",
        value:[
          {charValu:"1231", valueDesc:"",pricing:"100",status:''},
          {charValu:"8888", valueDesc:"",pricing:"600",status:''},
          {charValu:"9999", valueDesc:"",pricing:"1000",status:''}
        ]
      },
      {
        id:"2",
        description:"paint code",
        value:[
          {charValu:"a3da", valueDesc:"",pricing:"",status:''},
          {charValu:"", valueDesc:"",pricing:"",status:''}
        ]
      },
      {
        id:"3",
        description:"door",
        value:[
          {charValu:"", valueDesc:"",pricing:"",status:''}
        ]
      },
      {
        id:"4",
        description:"front options",
        value:[
          {charValu:"", valueDesc:"",pricing:"",status:''}
        ]
      },
      {id:"5",description:"interior options",value:[{charValu:"", valueDesc:"",pricing:"",status:''}]},
      {id:"0",description:"passenger side door",value:[{charValu:"", valueDesc:"",pricing:"",status:''}]},
      {id:"6",description:"driver side door",value:[{charValu:"", valueDesc:"",pricing:"",status:''}]},
      {id:"0",description:"interior lights",value:[{charValu:"", valueDesc:"",pricing:"",status:''}]},      
    ]
  }

  showVlaues(event,value){
    console.log(value)
  }

  ngOnInit() {
  }

}
