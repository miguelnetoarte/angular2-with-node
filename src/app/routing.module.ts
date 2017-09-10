import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash:false })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
