import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/services/employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit{

  employeeDetails: Employee = {
    id: '' ,
    name:'',
    email: '',
    phone:0,
    salary:0,
    department:'',
  }

  constructor(private route: ActivatedRoute, private employeeService : EmployeesService, private router:Router ){}

  ngOnInit(): void {
  this.route.paramMap.subscribe({
    next: (params) => {
      const id = params.get('id');
      if(id){
        //call api
        this.employeeService.getEmployee(id).subscribe({
          next:(response) => {
            this.employeeDetails = response;
          }
        })
      }
    }
  })
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    });
  }

  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe({next: (response) => {
      this.router.navigate(['employees'])
    }
  });
  }
}
