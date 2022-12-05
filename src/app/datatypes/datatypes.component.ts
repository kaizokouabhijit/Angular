import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {
  course:string = "My name is Anthony Gonsalves"
  duration:number|undefined
  isStudying:Boolean= false

  courseContent:string[]|undefined
  random:any | undefined
  myTuple:[string, number, boolean]|undefined

  emp = 
  {
    code:1,
  name:"Rahul",
dept:"IT"
}
employees = [
  {
    code:1,
    name:'Rahul',
    dept:"IT"
  }
]
  constructor() {
    console.log("Inside constructor")
    this.duration = 5
   }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.courseContent = ["HTML", "Css","JS","AJAX"]
    this.random = [1,true,"string"]
    this.myTuple = ["test", 1, false]
  }

}
