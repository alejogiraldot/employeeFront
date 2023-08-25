import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateEmployedRequest, CreateEmployedResponse, FindEmployedResponse,CreateDepartmentRequest,CreateDepartmentResponse,FindDepartmentResponse } from './employed.model';

@Injectable({
  providedIn: 'root'
})
export class EmployedService {
  private baseUrl = 'http://localhost:8098/employee';
  private baseUrlDeparment = 'http://localhost:8098/department';

  constructor(private http: HttpClient) {}

  createEmployed(request: CreateEmployedRequest): Observable<CreateEmployedResponse> {
    return this.http.post<CreateEmployedResponse>(`${this.baseUrl}`, request);
  }

  findEmployed(id: number): Observable<FindEmployedResponse> {
    return this.http.get<FindEmployedResponse>(`${this.baseUrl}/${id}`);
  }

  deleteEmployed(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  createDepartment(request: CreateDepartmentRequest): Observable<any> {
    return this.http.post<CreateDepartmentResponse>(`${this.baseUrlDeparment}`, request);
  }
  findDepartment(id: number): Observable<FindDepartmentResponse> {
    return this.http.get<FindDepartmentResponse>(`${this.baseUrlDeparment}/${id}`);
  }
  getAllDepartments(): Observable<FindDepartmentResponse[]> {
    const url = `${this.baseUrlDeparment}/findAll`;
    return this.http.get<FindDepartmentResponse[]>(url);
  }
}
