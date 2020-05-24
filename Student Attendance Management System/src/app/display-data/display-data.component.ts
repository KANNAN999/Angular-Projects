import { Component, OnInit } from '@angular/core';

export class Student{
  constructor(public rollno:number,public name:string,public attendance:string,public age:number){}
}



@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }

StudentList=[
new Student(1,"Kannan","75 %",24),
new Student(2,"Anand","100 %",34),
new Student(3,"Vishal","55 %",23),
new Student(4,"Ravi","95 %",45),
new Student(5,"Steve","65 %",21),
]



  ngOnInit() {
  }

}
