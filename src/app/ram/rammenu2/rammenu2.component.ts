import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-rammenu2',
  templateUrl: './rammenu2.component.html',
  styleUrls: ['./rammenu2.component.css']
})
export class Rammenu2Component implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit() {
    console.log("rammenu2 component",this.api.ram1())
  }

}
