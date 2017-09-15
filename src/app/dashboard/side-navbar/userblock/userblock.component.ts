import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserblockService } from './userblock.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    @Output() someEvent = new EventEmitter<string>();
    constructor(public userblockService: UserblockService) {

        this.user = {
            picture: 'assets/img/user/02.jpg'
        };
    }

    ngOnInit() {
    }
      callParent() {
    this.someEvent.next('fayaz');
  }
    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
