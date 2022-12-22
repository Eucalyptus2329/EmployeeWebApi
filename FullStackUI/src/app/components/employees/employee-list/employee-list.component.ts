import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [
    {
      id: '58c0a79d-5933-4307-a87f-e01c21776a27',
      name:'John Doe',
      email:'John.doe@email.com',
      phone:9876543210,
      salary:61000,
      department:'HR'
    },
    {
      id: '1101a979-1983-4d49-9eae-80c40a51d68d',
      name:'Jim Doe',
      email:'Jim.doe@email.com',
      phone:4562543210,
      salary:64000,
      department:'Sales'
    },
    {
      id: '1ecc2079-41d2-4405-8c52-9a900edb1d2d',
      name:'Jeff Doe',
      email:'Jeff.doe@email.com',
      phone:9871543210,
      salary:35000,
      department:'Maintainance'
    },
  ];
  constructor() {}

  ngOnInit(): void {

    this.employees.push()
  }
}
