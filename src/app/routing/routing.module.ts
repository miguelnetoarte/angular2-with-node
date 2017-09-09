import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
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
