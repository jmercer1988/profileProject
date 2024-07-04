import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavLink } from '../jm-header/jm-header.component';

@Component({
  selector: 'jm-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './jm-footer.component.html',
  styleUrl: './jm-footer.component.scss'
})
export class JmFooterComponent {
  @Input() copyrightText: string = '';
  @Input() links: NavLink[] = [];
}
