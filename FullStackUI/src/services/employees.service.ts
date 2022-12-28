import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/Models/employee.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiURL: string = environment.baseApiURL;
  constructor(private http:HttpClient) { }
  
  GetAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiURL +'/api/employees');
  }

  addEmployee(addEmployeeRequest: Employee) : Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'; //Override GUID error
    return this.http.post<Employee>(this.baseApiURL +'/api/employees', addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiURL +'/api/employees/' + id);
  }

  updateEmployee(id:string, updateEmployeerRequest:Employee) : Observable<Employee> {
    return this.http.put<Employee>(this.baseApiURL +'/api/employees/' + id , updateEmployeerRequest);
  }

  deleteEmployee(id : String) : Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiURL +'/api/employees/' + id);
  }
}

