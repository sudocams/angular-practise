import { Goal } from './../goal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent  implements OnInit{

  goals:Goal []=[
    // property goals of arraylist Goal (class Goal)
    //keyword new is used
    new Goal(1,'watch comedy', 'Im not sure if i will watch this for sure', new Date(2020,3,14)),
    new Goal(2, 'try out new things','this is something which i will not even finish',new Date(2020,3,15)),
    new Goal(3, 'take screen shots','screenshots of each and every',new Date(2020,3,17)),
    new Goal(4, 'coding java','java is so hard but i will try',new Date(2020,4,20)),
    new Goal(5,'django is waiting','this will be used for backend developing',new Date(2020,3,30)),
    new Goal(6,'eat like a goat','this is a full descroiption of ndiwa',new Date(2020,4,30)),
    new Goal(7,'cry like a pig','this is now her brother',new Date(2020,5,26)),
    new Goal(8,'code like camlsu','code is never running',new Date(2020,8,23)),
    new Goal(9, 'not care about a damn thing','why is this being done again', new Date(2020,10,12)),

  ];

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completDate = new Date(goal.completDate);
    this.goals.push(goal);
  }
  constructor(){

  }
  ngOnInit(){

  }
  toggledetail(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`are you sure you want to delete ${this.goals[index].name}?`)

      if(toDelete){
        this.goals.splice(index, 1);

      }
    }
  }
  
}
