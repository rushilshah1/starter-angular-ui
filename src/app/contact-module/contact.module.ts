import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactRootComponent } from './contact-root/contact-root.component'
import { SharedModule } from '../shared-module/shared.module';
import { MaterialModule } from '../material-module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactRootComponent]
})
export class ContactModule { }
