import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [ApiService]
})
export class StudentsComponent implements OnInit {


  years=['first','second', 'third', 'fourth']
  teams=['Individually','as a team of two']
  
  student;
  submitted = false;
  
  constructor(private api:ApiService) {

    this.getApplications();
  }


  ngOnInit() {
    this.student = {
    name:'',
    email:'',
    phone:'',
    team:'',
    admin_no:'', 
    course:'',
    year:'',
    daypreference:'',
    language:'',
    subscribe:'',
    bio:'',
    image:''
    };
  }

  getApplications =()=>{
    this.api.getAllApplications().subscribe(
      data =>{
          this.student = data;
      },
      error =>{
        console.log(error);
        
      }
    );

  }


}
