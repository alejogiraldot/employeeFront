import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployedComponent } from './create-employed/create-employed.component';
import { FindEmployedComponent } from './find-employed/find-employed.component';
import { DeleteEmployedComponent } from './delete-employed/delete-employed.component';
import { EmployeeActionsComponent } from './employee-actions/employee-actions.component';

const routes: Routes = [
  { path: '', redirectTo: 'actions', pathMatch: 'full' },
  { path: 'actions', component: EmployeeActionsComponent },
  { path: 'create', component: CreateEmployedComponent },
  { path: 'find', component: FindEmployedComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
