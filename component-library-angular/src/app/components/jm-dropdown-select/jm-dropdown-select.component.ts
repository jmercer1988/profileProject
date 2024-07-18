import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'jm-dropdown-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './jm-dropdown-select.component.html',
  styleUrls: ['./jm-dropdown-select.component.scss']
})
export class JmDropdownSelectComponent {
  selectedOptionLabel: string = '';
  selectedOption = new FormControl('');

  @Input() options: {value: any, label: string}[] = [
    { value: 1, label: 'Placeholder 1' },
    { value: 2, label: 'Placeholder 2' },
    { value: 3, label: 'Placeholder 3' }
  ]; // Placeholder options
  @Input() placeholder: string = 'Select an option';
  @Input() control: FormControl = new FormControl();
  @Input() multipleSelection: boolean = false;

  @Output() selectedValueChange = new EventEmitter<any>();

  onOptionSelected(option: any) {
    this.selectedOptionLabel = option.label;
    this.selectedValueChange.emit(option.label);
  }

  
}
