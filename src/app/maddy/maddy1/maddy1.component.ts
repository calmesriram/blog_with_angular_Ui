import { Component, OnInit } from '@angular/core';
import { ApimaddyService } from '../apimaddy.service';

@Component({
  selector: 'app-maddy1',
  templateUrl: './maddy1.component.html',
  styleUrls: ['./maddy1.component.css']
})
export class Maddy1Component implements OnInit {



  constructor(public api:ApimaddyService) { }

  ngOnInit() {
    console.log("maddy component",this.api.test())
  }

}
