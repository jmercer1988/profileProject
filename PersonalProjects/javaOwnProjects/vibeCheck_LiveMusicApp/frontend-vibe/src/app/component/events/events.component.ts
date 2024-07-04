import { Component, Input } from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'vc-events',
  templateUrl: './events.component.html',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  @Input() events: any[] | undefined; // Replace 'any' with your Event model

  // Add methods and logic as needed
}
