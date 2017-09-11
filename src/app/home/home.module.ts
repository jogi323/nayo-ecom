import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Shared Module
import { SharedModule } from '../shared/shared.module';

//Shared Services
import { SettingsService } from '../shared/services/settings/settings.service';

//Home Module Routing
import { HomeRoutingModule } from './home-routing.module';

//Home Module Components
import { HomeComponent } from './home.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';
import { CarousalComponent } from './components/portal-home/carousal/carousal.component';
import { ProductsComponent } from './components/portal-home/products/products.component';
import { CategoriesComponent } from './components/portal-home/categories/categories.component';
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
      PortalHomeComponent,
      CarousalComponent,
      ProductsComponent,
      CategoriesComponent,
      CharacteristicsComponent
    ],
  providers:[
    SettingsService
  ]
})
export class HomeModule { 
  
}
