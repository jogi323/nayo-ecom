import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavsearchComponent } from './top-navbar/navsearch/navsearch.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

import { SettingsService } from './services/settings/settings.service';
import { MenuService } from './services/menu/menu.service';
import { ThemesService } from './services/themes/themes.service';

import { menu } from './menu';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent, 
    HomeComponent, 
    TopNavbarComponent,
    SideNavbarComponent,
    NavsearchComponent
  ],
  providers:[
    SettingsService,
    MenuService,
    ThemesService
  ]
})
export class DashboardModule { 
  constructor(public menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
