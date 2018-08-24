import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MaterialModule } from '../material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [JumbotronComponent],
  exports: [JumbotronComponent]
})
export class SharedModule { }
