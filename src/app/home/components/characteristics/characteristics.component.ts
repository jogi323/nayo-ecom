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
      {id:"0",description:"vechile identification number",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"2",description:"paint code",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"3",description:"door",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"4",description:"front options",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"5",description:"interior options",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"0",description:"passenger side door",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"6",description:"driver side door",value:[{charValu:"", valueDesc:"",pricing:""}]},
      {id:"0",description:"interior lights",value:[{charValu:"", valueDesc:"",pricing:""}]},      
    ]
  }

  ngOnInit() {
  }

}
