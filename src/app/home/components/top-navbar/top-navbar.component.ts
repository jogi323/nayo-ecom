import { Component, OnInit, ViewChild } from '@angular/core';
const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout

    isNavSearchVisible: boolean;
    @ViewChild('fsbutton') fsbutton;  // the fullscreen button

    constructor() {

        // show only a few items on demo
        // this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout

    }

    ngOnInit() {
        this.isNavSearchVisible = false;
        if (browser.msie) { // Not supported under IE
            this.fsbutton.nativeElement.style.display = 'none';
        }
    }

    // toggleUserBlock(event) {
    //     event.preventDefault();
    //     this.userblockService.toggleVisibility();
    // }

    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    // toggleOffsidebar() {
    //     this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    // }

    // toggleCollapsedSideabar() {
    //     this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    // }

    // isCollapsedText() {
    //     return this.settings.layout.isCollapsedText;
    // }

    toggleFullScreen(event) {

        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        let el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
    }

}
