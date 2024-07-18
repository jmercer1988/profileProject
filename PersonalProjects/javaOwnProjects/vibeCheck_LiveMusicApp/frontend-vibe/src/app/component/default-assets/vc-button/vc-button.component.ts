import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'vc-button',
  standalone: true,
  imports: [],
  templateUrl: './vc-button.component.html',
  styleUrl: './vc-button.component.scss'
})

export class VcButtonComponent {
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<void>();
  onClick() {
      this.buttonClick.emit();
  }
}
