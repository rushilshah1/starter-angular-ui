import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatRadioModule,
  MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatTooltipModule, MatTabsModule, MatProgressBarModule,
  MatDialogModule, MatSliderModule, MatSlideToggleModule, MatStepperModule, MatChipsModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatChipsModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
