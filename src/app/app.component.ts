import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form = new FormGroup({
    inp1:  new FormControl<string>('input 1'),
    inp2:  new FormControl<string>('input 2'),
    inp3:  new FormControl<string>('input 3')
  });


  public toggleFormValid(valid: boolean): void {
    valid && this.form.setErrors({error: 'Some Error...'});
    !valid && this.form.setErrors(null);
  }

  public inputInvalid(valid: boolean): void {
    valid && this.form.controls['inp1'].setErrors({error: 'Some Error...'});
    !valid && this.form.controls['inp1'].setErrors(null);
  }
}
