import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class FieldValidatorService implements ErrorStateMatcher {
 public  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  public matchValidator(field: AbstractControl): ValidatorFn {
    return (repeat: AbstractControl): { [key: string]: any } => {
      if (field.value !== repeat.value) return { 'nomatch': true }
    }
  }

  public getError(field: AbstractControl) {
    return field.errors? 'form.errors.'+Object.keys(field.errors)[0] : '';
  }
}

//validatorFunctions
