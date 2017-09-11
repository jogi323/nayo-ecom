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
import { ThemeSettingsComponent } from './components/theme-settings/theme-settings.component';

//Services
import { SettingsService } from '../shared/services/settings/settings.service';
import { MenuService } from '../shared/services/menu/menu.service';
import { ThemesService } from '../shared/services/themes/themes.service';
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
