import { Component } from '@angular/core';
import { CreateDepartmentRequest } from '../employed.model';
import { EmployedService } from '../employed.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {
  createDepartmentRequest: CreateDepartmentRequest = {
    departmentCode: '',
    departmentName: '',
  };

  constructor(private employedService: EmployedService) {}


  createDepartment() {
    this.employedService.createDepartment(this.createDepartmentRequest).subscribe(
      (response) => {
        console.log('Departamento creado:', response);
        alert('Departamento creado exitosamente');
        this.clearForm();
      },
      (error) => {
        console.error('Error al crear el departamento:', error);
        alert('Error al crear el departamento');
      }
    );
  }

  clearForm() {
    this.createDepartmentRequest.departmentCode = '';
    this.createDepartmentRequest.departmentName = '';
  }
}






