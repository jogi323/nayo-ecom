import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent }
        // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
        // { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
        // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
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
