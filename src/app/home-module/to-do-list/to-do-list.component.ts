import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../../services/tasks-service/tasks.service';
import { Task } from '../../models/Task';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(private taskService: TasksService, private dialog: MatDialog) { }

  @Input('showForm')
  showForm: boolean;
  @Output()
  close: EventEmitter<boolean> = new EventEmitter<boolean>();

  //Constants for Create Task Form
  createFormTitle: string = 'Create New Task';
  //Constants for Edit Task Form
  editFormTitle: string = 'Edit Task';

  //Dynamically changing on which form to display
  formTitle: string;
  editForm: boolean;

  taskList: Array<Task> = new Array<Task>();
  pendingTaskList: Array<Task> = new Array<Task>();
  completedTaskList: Array<Task> = new Array<Task>();
  preEditedTask: Task;

  //Functions to interact with Form
  defaultCreateForm() {
    this.formTitle = this.createFormTitle;
    this.editForm = false;
  }

  launchEditForm(currentTask: Task) {
    this.showForm = true;
    this.formTitle = this.editFormTitle;
    this.editForm = true;
    this.preEditedTask = currentTask;
  }

  submitForm($event) {
    if (!this.editForm) this.createTask($event);
    else if (this.editForm) this.editTask($event);
    else throw Error("Form Type not recognized");
  }

  closeModal($event) {
    this.showForm = $event;
    this.close.emit($event);
  }

  launchDeleteModal(): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      let dialogRef = this.dialog.open(DeleteConfirmationComponent, {
        width: '350px',
        height: '200px'
      });
      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe((tasks: Array<Task>) => {
        this.taskList = tasks;
        this.completedTaskList = new Array<Task>();
        this.pendingTaskList = new Array<Task>();
        this.taskList = _.sortBy(tasks, [(task: Task) => {
          if (task.completed) this.completedTaskList.push(task);
          else this.pendingTaskList.push(task);
          return task.completed;
        }]);
      },
        (err: any) => {
          console.log(err);
        });
  }

  createTask(newTask: Task) {
    this.taskService.createTask(newTask)
      .subscribe((task: Task) => {
        this.getAllTasks();
      },
        (err: any) => {
          console.log("Error in creating a Task");
        });
  }

  editTask(updatedTask: Task) {
    this.taskService.updateTask(updatedTask.id, updatedTask)
      .subscribe((task: Task) => {
        this.getAllTasks();
      },
        (err: any) => {
          console.log(err);
        });
  }

  deleteTask(id: string) {
    this.launchDeleteModal()
      .then((confirm: Boolean) => {
        if (!confirm) return;
        this.taskService.deleteTask(id)
          .subscribe((task: Task) => {
            this.getAllTasks();
          },
            (err: any) => {
              console.log(err);
            });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.getAllTasks();
  }
  ngOnChanges() {
    this.defaultCreateForm();
  }
}
