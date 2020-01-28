import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApimaddyService {

  constructor() { 
    console.log("from maddy service ")
  }

  test(){
    return "maddy boy dirty boy"
  }
}
