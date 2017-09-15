import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';
import { ChartsModule as Ng2ChartsModule } from 'ng2-charts/ng2-charts';
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
import { SalesReportsComponent } from './components/sales-reports/sales-reports.component';
import { ActivityReportsComponent } from './components/activity-reports/activity-reports.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    FileUploadModule,
    ImageCropperModule,
    Ng2ChartsModule
  ],
  declarations: [
    DashboardComponent, 
    HomeComponent, ThemeSettingsComponent, 
    TopNavbarComponent,
    SideNavbarComponent,
    NavsearchComponent,
    UserblockComponent,
    SalesReportsComponent,
    ActivityReportsComponent,
    DasboardComponent,
    HomePageComponent,
    FeaturedProductsComponent,
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
