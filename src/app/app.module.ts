import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Appmenu1Component } from './appmenu1/appmenu1.component';
import { Appmenu2Component } from './appmenu2/appmenu2.component';
import { RamModule } from './ram/ram.module';
import { MaddyModule } from './maddy/maddy.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
// import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    Appmenu1Component,
    Appmenu2Component,
    LoginComponent,
    DashboardComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RamModule,
    MaddyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
