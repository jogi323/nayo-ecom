import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

//Shared Module
import { SharedModule } from '../shared/shared.module';

//Shared Services
//import { SettingsService } from '../shared/services/settings/settings.service';
import { MenuService } from './services/menu/menu.service';
import { SettingsService } from './services/settings/settings.service';
import { menu } from './menu';

//Home Module Routing
import { HomeRoutingModule } from './home-routing.module';

//Home Module Components
import { HomeComponent } from './home.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { NavsearchComponent } from './components/top-navbar/navsearch/navsearch.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';
import { CarousalComponent } from './components/portal-home/carousal/carousal.component';
import { ProductsComponent } from './components/portal-home/products/products.component';
import { CategoriesComponent } from './components/portal-home/categories/categories.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderViewComponent } from './components/order-view/order-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    AngularMultiSelectModule,
    SharedModule
  ],
  declarations: [
      HomeComponent,
      ProductCatalogComponent,
      PortalHomeComponent,
      CarousalComponent,
      ProductsComponent,
      CategoriesComponent,
      TopNavbarComponent,
      NavsearchComponent,
      SideNavbarComponent,
      CharacteristicsComponent,
      OrdersComponent,
      FooterComponent,
      CharacteristicsComponent,
      OrderViewComponent
    ],
  providers:[
    SettingsService,
    MenuService
  ]
})
export class HomeModule { 
  constructor(public menuService: MenuService) {
    menuService.addMenu(menu);
  }
}
