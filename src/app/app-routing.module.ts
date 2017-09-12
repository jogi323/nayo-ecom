// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { AppComponent } from './app.component';
import { RecoverUsernameComponent } from './recover-username/recover-username.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
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

  // Not lazy-loaded routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverComponent },
  { path: 'recoverusername', component: RecoverUsernameComponent },
  // { path: 'lock', component: LockComponent },
  // { path: 'maintenance', component: MaintenanceComponent },
  // { path: '404', component: Error404Component },
  // { path: '500', component: Error500Component },

  // Not found
  { path: '**', redirectTo: 'home' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:false});
