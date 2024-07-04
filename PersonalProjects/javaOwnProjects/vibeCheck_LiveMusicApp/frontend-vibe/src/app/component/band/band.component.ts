import { Component, Input } from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {SongListComponent} from "./song-list/song-list.component";

@Component({
  selector: 'vc-band',
  templateUrl: './band.component.html',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    SongListComponent
  ],
  styleUrl: './band.component.scss'
})
export class BandComponent {
  @Input() bandName: string = '';
  @Input() songs: any[] | undefined; // Replace 'any' with a Song model
  @Input() albums: any[] | undefined; // Replace 'any' with an Album model
  @Input() shows: any[] | undefined; // Replace 'any' with a Show model
  @Input() comments: any[] | undefined; // Replace 'any' with a Comment model
}
