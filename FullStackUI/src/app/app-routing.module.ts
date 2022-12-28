import { R3SelectorScopeMode } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';

const routes: Routes =
[
  {
    // when this path is selected, the employeelist component is opened
    path: '',
    component: EmployeeListComponent 
  },
  {
    // when this path is selected, the employee component is opened
    path: 'employees',
    component: EmployeeListComponent 
  },
  {
    // when this path is selected, the add employee component is opened
    path: 'employees/add',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
