import { AbstractControl,ValidatorFn } from '@angular/forms';

export class Validation {
  static match(controlName: string, checkControlName: string) {
    return (formGroup: AbstractControl) => {
      const control = formGroup.get(controlName);
      const checkControl = formGroup.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        checkControl?.setErrors({ matching: true });
        return { matching: true };
      } else {
        checkControl?.setErrors(null);
        return null;
      }
    };
  }
}
