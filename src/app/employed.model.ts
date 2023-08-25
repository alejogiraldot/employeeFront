export interface CreateEmployedRequest {

    documentType: string;
    documentNumber: string;
    name: string;
    lastName: string;
    departmentId: Department;
    city: string;
    direction: string;
    employedCity: string;
    phoneNumber: string;
  }

  export interface Department {
    id: string;
    departmentCode: string;
    departmentName: string;
    hourCreation: string; // Puedes ajustar el tipo según cómo manejes las fechas en Angular
  }
  
  export interface Employed {
    documentType: string;
    documentNumber: string;
    name: string;
    lastName: string;
    departmentId: Department;
    city: string;
    direction: string;
    employedCity: string;
    phoneNumber: string;
    hourCreation: string;
    // Define las propiedades relacionadas con los empleados si es necesario
  }

  export interface CreateEmployedResponse {
    documentType: string;
    documentNumber: string;
    name: string;
    lastName: string;
    departmentId: Department;
    city: string;
    direction: string;
    employedCity: string;
    phoneNumber: string;
    hourCreation: string;
  }
  
  export interface FindEmployedResponse {
    // Define las propiedades de la respuesta al buscar un empleado
    documentType: string;
    documentNumber: string;
    name: string;
    city: string;
    phoneNumber: string;
    departmentId: Department;
    hourCreation: string;

  }

  export interface CreateDepartmentRequest {
    departmentCode: string;
    departmentName: string;
  }
  export interface CreateDepartmentResponse {
    departmentCode: string;
    departmentName: string;
    hourCreation: string;
  }

  export interface FindDepartmentResponse {
    departmentCode: string;
    departmentName: string;
    hourCreation: string;
  }
