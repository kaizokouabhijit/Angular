import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
title:string = "NGStyle"

people:any[] = [
  {
    "name": "Douglas  Pace",
    "age": 35,
    "country": 'MARS'
  },
  {
    "name": "Mcleod  Mueller",
    "age": 32,
    "country": 'USA'
  },
  {
    "name": "Day  Meyers",
    "age": 21,
    "country": 'HK'
  },
  {
    "name": "Aguirre  Ellis",
    "age": 34,
    "country": 'UK'
  },
  {
    "name": "Cook  Tyson",
    "age": 32,
    "country": 'USA'
  }
];
  constructor() { }

  ngOnInit(): void {
  }
  getColor(country:string) {
    let ccolor = 'orange'
    switch(country){
      case('UK'):
      ccolor = 'green';break;
      case ('USA'):
        ccolor = 'blue';break;
        case ('HK'):
        ccolor = 'black';break;


    }
    return ccolor
  }
    

}
