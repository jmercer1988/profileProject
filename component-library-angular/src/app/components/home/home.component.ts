import { Component, EventEmitter } from '@angular/core';
import { JmDropdownSelectComponent } from "../jm-dropdown-select/jm-dropdown-select.component";
import { GridDataDisplayComponent } from "../grid-data-display/grid-data-display.component";
import { JmCardComponent } from "../jm-card/jm-card.component";
import { JmInputComponent } from "../jm-input/jm-input.component";
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
      JmDropdownSelectComponent, 
      GridDataDisplayComponent, 
      JmCardComponent, 
      JmInputComponent,
      CommonModule,
    ]
})
export class HomeComponent {
  title = 'Joeys Playground Library';
  selectedOption = new FormControl('');

  cardData = {
    title: 'Employee Information',
    content: `
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Department:</strong> Engineering</p>
      <p><strong>Email:</strong> johndoe@example.com</p>
    `,
    imageUrl: 'https://example.com/profile.jpg',
    actions: [
      { label: 'View Details', click: new EventEmitter<void>() },
      { label: 'Edit', click: new EventEmitter<void>() }
    ]
  };

  options = [
    { value: 1, label: 'Damien Naggi' },
    { value: 2, label: 'Kate Hanning' },
    { value: 3, label: 'Jordan Rowe' },
    { value: 4, label: 'Blake Cole'}
  ]; 

    ngOnInit(): void {
      this.selectedOption.get('selectedOption')?.setValue(this.options[0].value);
    }

    handleDropdownChange(selectedOption: any) {
      console.log("Selected option:", selectedOption);
      this.selectedOption.setValue(selectedOption); // Update the FormControl's value
  }

}
