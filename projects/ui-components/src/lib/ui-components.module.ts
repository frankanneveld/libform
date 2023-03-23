import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations: [FormInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormInputComponent],
})
export class UiComponentsModule {}
