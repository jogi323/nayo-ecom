import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeSettingsComponent } from './components/theme-settings/theme-settings.component';
import { SalesReportsComponent } from './components/sales-reports/sales-reports.component';
import { ActivityReportsComponent } from './components/activity-reports/activity-reports.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: '', component: DasboardComponent },
        { path: 'themesettings', component: ThemeSettingsComponent },
        { path: 'dashboard', component: DasboardComponent },
        { path: 'salesreports', component: SalesReportsComponent },
        { path: 'activityreports', component: ActivityReportsComponent },
        { path: 'homepage', component: HomePageComponent },
        { path: 'featuredproducts', component: FeaturedProductsComponent },
        // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
        // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
        // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
        // { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
        // { path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule' },
        // { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
