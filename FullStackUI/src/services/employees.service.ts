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

}
