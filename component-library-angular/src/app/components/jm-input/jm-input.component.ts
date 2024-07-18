import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'jm-input',
  standalone: true,
  imports: [
            ReactiveFormsModule,
            CommonModule
            ],
  templateUrl: './jm-input.component.html',
  styleUrl: './jm-input.component.scss'
})
export class JmInputComponent {

  @Input() type: string = 'text';             // Input type (text, email, password, etc.)
  @Input() label: string = '';               // Label for the input field
  @Input() placeholder: string = '';          // Placeholder text
  @Input() control: FormControl = new FormControl(); // Form control for validation
  @Input() required: boolean = false;         // Whether the field is required
  @Input() errorMessage: string = '';         // Custom error message
  @Input() icon: string = '';                 // Custom icon 
  @Input() inputField: number = 0;             

  @Output() valueChange = new EventEmitter<any>();

  get isValid() {
    return this.control.valid && (this.control.touched || this.control.dirty);
  }

  get isInvalid() {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }

  onValueChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
