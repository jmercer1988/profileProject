import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'vc-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() genres: string[] = [];
  @Output() genreSelected = new EventEmitter<string>();

  selectGenre(genre: string) {
    this.genreSelected.emit(genre);
  }
}
