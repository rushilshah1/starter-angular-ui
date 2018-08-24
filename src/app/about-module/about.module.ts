import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { AboutRootComponent } from './about-root/about-root.component';
import { MaterialModule } from '../material-module/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [AboutRootComponent]
})
export class AboutModule { }
