import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Task } from '../../models/Task';
import { debug } from 'util';
declare const $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /* Form Validation stuff */
  @Input('showForm')
  showForm: boolean;
  @Input('formTitle')
  formTitle: string;
  @Input('preEditedTask')
  preEditedTask: Task;
  @Input('editForm')
  editForm: boolean //Edit = true, Create = false

  @Output()
  close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  submit: EventEmitter<Task> = new EventEmitter<Task>();

  /* Form Stuff */
  myForm: FormGroup;
  name: FormControl;
  description: FormControl;
  completed: FormControl;

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.description = new FormControl('', Validators.required);
    this.completed = new FormControl('', Validators.required);
  }

  initializeForm() {
    this.myForm = new FormGroup({
      name: this.name,
      description: this.description,
      completed: this.completed
    });
  }

  prefillForm() {
    if (!this.preEditedTask) return;
    this.name.setValue(this.preEditedTask.name);
    this.description.setValue(this.preEditedTask.description);
    this.completed.setValue(this.preEditedTask.completed);
  }
  resetForm() {
    if (this.myForm) this.myForm.reset();
  }
  /* Modal Functions */
  openModal() {
    $(document).ready(() => {
      $('#myModal').modal({backdrop: 'static', keyboard: false});
    });
  }

  closeModal() {
    $(document).ready(() => {
      $('#myModal').modal('hide');
    });
    this.close.emit(false);
  }

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.initializeForm();
  }

  ngOnChanges() {
    if (this.editForm) this.prefillForm();
    else this.resetForm();
    if (this.showForm) { this.openModal(); }
  }

  submitTask() {
    let task: Task = new Task({
      'name': this.myForm.controls.name.value,
      'description': this.myForm.controls.description.value,
      'completed': this.myForm.controls.completed.value
    });
    if(this.editForm) task.id = this.preEditedTask.id;
    this.submit.emit(task);
    this.closeModal();
    this.resetForm();
  }
}
