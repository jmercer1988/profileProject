import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CardAction {
  label: string;
  click: EventEmitter<void>;
}

@Component({
  selector: 'jm-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jm-card.component.html',
  styleUrl: './jm-card.component.scss'
})
export class JmCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() imageUrl: string = '';
  @Input() actions: CardAction[] = [];

  onButtonClick(event: Event) {
    console.log('Button clicked:', event); 
  }
}
