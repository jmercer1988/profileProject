import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface NavLink {
  label: string;
  url: string;
  isActive?: boolean; // Optional active state
}

@Component({
  selector: 'jm-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './jm-header.component.html',
  styleUrl: './jm-header.component.scss'
})
export class JmHeaderComponent {
  @Input() title: string = '';
  @Input() logoUrl: string = '';
  @Input() links: NavLink[] = [];
}
