import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showAddress:Boolean = true
  employees = [
    {"code":1,
  "name":"Abhijit",
  "address":{
    "city":"Bengaluru"
  }
  },
  {"code":2,
  "name":"Rahul",
  "address":{
    "city":"Jaipur"
  }}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
