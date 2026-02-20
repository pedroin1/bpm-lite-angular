import { Component, computed, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputType } from '@app/entities/input-types';

@Component({
  selector: 'app-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  readonly label = input.required<string>();

  readonly placeholder = input.required<string>();

  readonly control = input.required<FormControl>();

  readonly type = input<InputType>('text');

  readonly errorMessages = input<Record<string, string> | undefined>();

  readonly maxLength = input<number>();

  readonly minLength = input<number>();

  readonly maxLenghtReached = computed(() => {
    const control = this.control();
    const max = this.maxLength();

    if (!control || !max) return false;

    return control.value.length >= max;
  });

  protected getErrorMessage(): string {
    const control = this.control();

    if (!control || !control.errors) return '';

    const firstErrorKey = Object.keys(control.errors)[0];

    const messages = this.errorMessages();

    return messages?.[firstErrorKey] ?? 'Campo inválido';
  }
}
