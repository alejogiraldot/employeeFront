import { Component } from '@angular/core';
import { CreateEmployedRequest } from '../employed.model';
import { EmployedService } from '../employed.service';
import { Department } from '../employed.model';
import { FindDepartmentResponse } from '../employed.model';

@Component({
  selector: 'app-create-employed',
  templateUrl: './create-employed.component.html',
  styleUrls: ['./create-employed.component.scss']
})
export class CreateEmployedComponent {
  createEmployedRequest: CreateEmployedRequest = {
    documentType: '',
    documentNumber: '',
    name: '',
    lastName: '',
    departmentId: {
      id: '',
      departmentCode: '',
      departmentName: '',
      hourCreation: ''
    },
    city: '',
    direction: '',
    employedCity: '',
    phoneNumber: ''
  };

  constructor(private employedService: EmployedService) {}

  createEmployed() {
    this.employedService.createEmployed(this.createEmployedRequest).subscribe(
      () => {
        console.log('Empleado creado exitosamente');
        alert('Empleado creado exitosamente');
        this.clearForm();
      },
      (error) => {
        console.error('Error al crear el empleado:', error);
        alert('Error al crear el empleado');
      }
    );
  }

  clearForm() {
    this.createEmployedRequest.documentType = '';
    this.createEmployedRequest.documentNumber = '';
    this.createEmployedRequest.name = '';
    this.createEmployedRequest.lastName = '';
    this.createEmployedRequest.departmentId.id = '';
    this.createEmployedRequest.city = '';
    this.createEmployedRequest.direction = '';
    this.createEmployedRequest.employedCity = '';
    this.createEmployedRequest.phoneNumber = '';
  }
}