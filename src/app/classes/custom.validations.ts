import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidations {
  /**
   * Unique Validation
   * @param {AbstractControl} control
   * @returns {(ValidationErrors | null)}
   */
  static unique(control: AbstractControl): ValidationErrors | null {
    return control.value === 'kold' ? { unique: true } : null;
  }

  /**
   * Async Unique Validation
   * @param {AbstractControl} control
   * @returns {(ValidationErrors | null)}
   */
  static async asyncUnique(control: AbstractControl): Promise<ValidationErrors | null> | null {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return control.value === 'kold' ? resolve({ asyncUnique: true }) : resolve(null);
      }, 5000);
    });
  }
}
