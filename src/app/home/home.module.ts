import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MenuService } from './services/menu/menu.service';
import { SettingsService } from './services/settings/settings.service';
import { menu } from './menu';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { NavsearchComponent } from './components/top-navbar/navsearch/navsearch.component';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';
import { CarousalComponent } from './components/portal-home/carousal/carousal.component';
import { ProductsComponent } from './components/portal-home/products/products.component';
import { CategoriesComponent } from './components/portal-home/categories/categories.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
      HomeComponent,
      ProductCatalogComponent,
      TopNavbarComponent,
      NavsearchComponent,
      PortalHomeComponent,
      CarousalComponent,
      ProductsComponent,
      CategoriesComponent,
      SideNavbarComponent,
      CharacteristicsComponent
    ],
  providers:[MenuService,SettingsService]
})
export class HomeModule { 
  constructor(public menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
