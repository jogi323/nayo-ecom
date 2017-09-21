import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PortalHomeComponent } from './components/portal-home/portal-home.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        { path: '', component:PortalHomeComponent },
        { path: 'products', component:ProductCatalogComponent },
        { path: 'characteristics', component:CharacteristicsComponent },
        { path: 'orders', component:OrdersComponent },
        { path: 'vieworder', component:OrderViewComponent },
        { path: 'shoppingcart', component:ShoppingCartComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
