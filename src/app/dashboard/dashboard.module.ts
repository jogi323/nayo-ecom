import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Shared module
import { SharedModule } from '../shared/shared.module';

// Dashoard Routing
import { DashboardRoutingModule } from './dashboard-routing.module';

// Dasboard and it's child components
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavsearchComponent } from './top-navbar/navsearch/navsearch.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { UserblockComponent } from './side-navbar/userblock/userblock.component';
import { ThemeSettingsComponent } from './components/theme-settings/theme-settings.component';

//Services
// import { SettingsService } from './services/settings/settings.service';
import { MenuService } from '../core/menu/menu.service';
// import { ThemesService } from './services/themes/themes.service';
import { UserblockService } from './side-navbar/userblock/userblock.service';
//Naigation Menu
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
    HomeComponent, ThemeSettingsComponent, 
    TopNavbarComponent,
    SideNavbarComponent,
    NavsearchComponent,
    UserblockComponent
  ],
  providers:[
    UserblockService
  ]
})
export class DashboardModule { 
  constructor(public menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
