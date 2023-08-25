import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-actions',
  templateUrl: './employee-actions.component.html',
  styleUrls: ['./employee-actions.component.scss']
})
export class EmployeeActionsComponent {
  showCreateView: boolean = false;
  showFindView: boolean = false;
  showCreateDepartmentView: boolean = false; // Agregado
  showFindDepartmentView: boolean = false;

  toggleCreateView() {
    this.showCreateView = !this.showCreateView;
    this.showFindView = false;
    this.showCreateDepartmentView = false; // Agregado
    this.showFindDepartmentView = false;
  }

  toggleFindView() {
    this.showFindView = !this.showFindView;
    this.showCreateView = false;
    this.showCreateDepartmentView = false; // Agregado
    this.showFindDepartmentView = false;
  }

  toggleCreateDepartmentView() {
    this.showCreateDepartmentView = !this.showCreateDepartmentView; // Agregado
    this.showCreateView = false;
    this.showFindView = false;
    this.showFindDepartmentView = false;
  }

  toggleFindDepartmentView() {
    this.showFindDepartmentView = !this.showFindDepartmentView; // Agregado
    this.showCreateView = false;
    this.showFindView = false;
    this.showCreateDepartmentView = false; // Agregado
  }
}
