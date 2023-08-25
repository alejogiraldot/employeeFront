import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindEmployedComponent } from './find-employed/find-employed.component';
import { DeleteEmployedComponent } from './delete-employed/delete-employed.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { EmployeeActionsComponent } from './employee-actions/employee-actions.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { FindDepartmentComponent } from './find-department/find-department.component';
import { CreateEmployedComponent } from './create-employed/create-employed.component';


@NgModule({
  declarations: [
    AppComponent,
    FindEmployedComponent,
    DeleteEmployedComponent,
    HomeComponent,
    EmployeeActionsComponent,
    CreateDepartmentComponent,
    FindDepartmentComponent,
    CreateEmployedComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
