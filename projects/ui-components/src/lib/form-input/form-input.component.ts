import { Component, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {

  public formControl: FormControl<string> = new FormControl();

  protected onChange: any = (_: any) => ({});
  protected onTouched: any = () => ({});
  protected onValue: any = () => ({});

  private control = inject(NgControl);

  constructor(){
    this.control.valueAccessor = this as unknown as ControlValueAccessor;
  }

  ngOnInit() {
    this.formControl = this.control.control as FormControl<string>
  }

  public writeValue(val: any): void {
    this.onValue(val);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  public setValue(val: any): void {
    this.formControl.patchValue(val);
  }

}
