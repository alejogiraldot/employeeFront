import { Component } from '@angular/core';
import { EmployedService } from '../employed.service';
import { FindDepartmentResponse } from '../employed.model';

@Component({
  selector: 'app-find-department',
  templateUrl: './find-department.component.html',
  styleUrls: ['./find-department.component.scss']
})
export class FindDepartmentComponent {
  departmentId: number = 0;
  findDepartmentResponse: FindDepartmentResponse | null = null; 

  constructor(private employedService: EmployedService) {
  }

  findDepartmentById() {
    this.findDepartmentResponse = null;

    this.employedService.findDepartment(this.departmentId).subscribe(
      (response: FindDepartmentResponse) => {
        this.findDepartmentResponse = response;
      },
      (error) => {
        console.error('Error al buscar el departamento:', error);
        alert('No existe un departamento con ese ID.'); 
      }
    );
  }
}
