import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Maddy1Component } from './maddy1/maddy1.component';
import { ApimaddyService } from './apimaddy.service';



@NgModule({
  declarations: [Maddy1Component],
  imports: [
    CommonModule
  ],exports:[Maddy1Component],
  providers:[ApimaddyService]

})
export class MaddyModule { 
  constructor(public a :ApimaddyService){
    console.log("",this.a.test());
  }

  irfan(){

  }
}
