import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rammenu2Component } from './ram/rammenu2/rammenu2.component';
import { Appmenu2Component } from './appmenu2/appmenu2.component';
import { LoginComponent } from './login/login.component';
import { Login1Guard } from './login1.guard';
import { Login2Guard } from './login2.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


const routes: Routes = [
  { path:'',
   redirectTo: '/login',
    pathMatch: 'full' 
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[Login1Guard],
  },
  {
    path:'userdashboard',
    component:UserdashboardComponent,
    canActivate:[Login1Guard],
  },
  {
     path: 'login', 
     component: LoginComponent},
  {
    path:'rammenu2',
    component:Rammenu2Component,
    canActivate:[Login1Guard],
  },
  {
    path:'appmenu2',
    component:Appmenu2Component,
    canActivate:[Login1Guard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
