import { Component } from '@angular/core';
import { FindEmployedResponse } from '../employed.model';
import { EmployedService } from '../employed.service';

@Component({
  selector: 'app-find-employed',
  templateUrl: './find-employed.component.html',
  styleUrls: ['./find-employed.component.scss']
})
export class FindEmployedComponent {  
  employeeId: number = 0;
  findEmployedResponse: FindEmployedResponse | null = null; 

  constructor(private employedService: EmployedService) {
  }

  findEmployed() {
    this.findEmployedResponse = null;

    this.employedService.findEmployed(this.employeeId).subscribe(
      (response: FindEmployedResponse) => {
        this.findEmployedResponse = response;
      },
      (error) => {
        console.error('Error al buscar el empleado:', error);
        alert('No existe un usuario con esa ID.'); 
      }
    );
  }
  deleteEmployed() {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.employedService.deleteEmployed(this.employeeId).subscribe(
        () => {
          console.log('Empleado eliminado exitosamente');
          this.findEmployedResponse = null; // Limpiar la respuesta del empleado eliminado
        },
        error => {
          console.error('Error al eliminar el empleado:', error);
          // Maneja el error si es necesario
        }
      );
    }
  }
}