import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appmenu1',
  templateUrl: './appmenu1.component.html',
  styleUrls: ['./appmenu1.component.css']
})
export class Appmenu1Component implements OnInit {

  constructor(public a : ApiService) { 

    
  }

  ngOnInit() {
  }

}
