import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private counter =1;
 public menuhide:boolean;
  constructor(public route:Router) {

console.log(this.counter,"counter form contructor")    
   }

  ram(){
  console.log("ram");
  }

  ram1(){
    this.counter++;
    return this.counter;
  }
 logout(){
  sessionStorage.clear();
  this.menuhide = false;
  this.route.navigate(['login'])
  return;
 }
  login(data){
    console.log("data from service",data)
    if(data.username == "" || data.password == undefined){
              alert("undefined");
              return;
    }
    if(data.username == "admin" && data.password == "admin"){
      console.log("admin");    
      sessionStorage.setItem("username","admin");
      this.route.navigateByUrl('dashboard')
    }
    if(data.username == "user" && data.password == "user"){
      console.log("user");    
      sessionStorage.setItem("username","user");
      this.route.navigateByUrl('userdashboard')
    }
    console.log(this.islogin())
  }

  islogin(){
    var data;    
       data = sessionStorage.getItem("username");
       if(data != "" && data != null && data != undefined){
         this.menuhide = true;
         return true;
       }
       else{
         return false
       }    
  }
}



