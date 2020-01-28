import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rammenu1Component } from './rammenu1/rammenu1.component';
import { Rammenu2Component } from './rammenu2/rammenu2.component';




@NgModule({
  declarations: [Rammenu1Component,Rammenu2Component],
  imports: [
    CommonModule
  ],
  exports:[
    Rammenu1Component,
    Rammenu2Component
  ],
  providers:[ ]
})
export class RamModule { }
