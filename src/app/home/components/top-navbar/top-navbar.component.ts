import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;
import { AppService } from '../../../app.service';

import { SettingsService } from '../../../core/settings/settings.service';
import { ThemesService } from '../../../core/themes/themes.service';
@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
    @Output() openModal = new EventEmitter<string>();
    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout
    logo: any;
    logoIcon: any;
    isNavSearchVisible: boolean;
    cart: any[];
    @ViewChild('fsbutton') fsbutton;  // the fullscreen button

    constructor(private settings: SettingsService, private themes: ThemesService, private topNavbarService: AppService) {

        // show only a few items on demo
        // this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout
        this.cart = [
            {
                productName: 'product 1',
                description: 'some description about the product',
                price: 1200,
                expectedArrival: '10/10/2017'
            },
                        {
                productName: 'product 2',
                description: 'some description about the product',
                price: 2200,
                expectedArrival: '10/10/2017'
            },
                        {
                productName: 'product 3',
                description: 'some description about the product',
                price: 3200,
                expectedArrival: '10/10/2017'
            },
                        {
                productName: 'product 4',
                description: 'some description about the product',
                price: 4200,
                expectedArrival: '10/10/2017'
            }
        ]

    }

    ngOnInit() {
        if (localStorage.getItem('currentTheme')) {
            this.themes.setTheme(localStorage.getItem('currentTheme'));
        }
        if (localStorage.getItem('logo')) {
            this.logo = localStorage.getItem('logo');
        } else {
            this.logo = 'assets/img/logo.png';
        }
        if (localStorage.getItem('logoIcon')) {
            this.logoIcon = localStorage.getItem('logoIcon');
        } else {
            this.logoIcon = 'assets/img/logo-single.png';
        }
        // this.topNavbarService.url  = 'http://localhost:4200/src/app/shared/data.json';
        // this.topNavbarService.getData().subscribe(res => {
        //     console.log(res);
        //     this.logo = res[0].logo.src;
        //     this.themes.setTheme(res[0].default);
        // });
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

    toggleOffsidebar() {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }

    toggleCollapsedSideabar() {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    }

    isCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }

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
    editProfile() {
        this.openModal.next();
    }

}
