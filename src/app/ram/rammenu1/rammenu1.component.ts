import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ApimaddyService } from 'src/app/maddy/apimaddy.service';

@Component({
  selector: 'app-rammenu1',
  templateUrl: './rammenu1.component.html',
  styleUrls: ['./rammenu1.component.css']
})
export class Rammenu1Component implements OnInit {

  constructor(public api:ApiService,public maddy:ApimaddyService) {    
    console.log("ram menu 1 component printing", this.api.ram1())
   
   }

  ngOnInit() {
  }

}
