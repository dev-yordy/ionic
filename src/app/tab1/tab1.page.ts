import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
   
  num:number;

  constructor() {}
  
  ngOnInit(){
    console.log("Hello");

    this.num = 12
 
    this.num = this.num + 3

    this.num = this.num + 5

    console.log(this.num)
  }
}
