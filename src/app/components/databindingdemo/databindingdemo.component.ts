import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingdemo',
  templateUrl: './databindingdemo.component.html',
  styleUrls: ['./databindingdemo.component.css']
})
export class DatabindingdemoComponent implements OnInit {

  principal:number =4000
  roi:number =4
  time:number = 2

  si:number=0

  

  
  constructor() { }

  ngOnInit(): void {
  }

    CalculateSI():void
    {

      this.si =  (this.principal*this.roi*this.time)/100
    }
}
