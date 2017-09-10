import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
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
