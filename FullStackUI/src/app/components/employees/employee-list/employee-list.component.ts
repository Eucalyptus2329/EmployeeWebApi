import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/services/employees.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.GetAllEmployees().subscribe({
      next:(employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
