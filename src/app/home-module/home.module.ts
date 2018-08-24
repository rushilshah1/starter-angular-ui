import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './home-root/home-root.component';
import { SharedModule } from '../shared-module/shared.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HttpModule } from '@angular/http';
import { ErrorService } from '../services/error-service/error.service';
import { CommonService } from '../services/common-service/common.service';
import { TasksService } from '../services/tasks-service/tasks.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module/material.module';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ToDoListComponent, DeleteConfirmationComponent],
  declarations: [HomeRootComponent, ToDoListComponent, FormComponent, DeleteConfirmationComponent],
  providers: [
    TasksService,
    CommonService,
    ErrorService
  ]
})
export class HomeModule { }
