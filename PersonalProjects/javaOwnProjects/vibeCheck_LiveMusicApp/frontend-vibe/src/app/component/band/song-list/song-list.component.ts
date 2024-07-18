import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.scss'
})
export class SongListComponent {
  // @Input() songs: Song[] = [];
}

/*
import { Component, Input } from '@angular/core';
import { Song } from './song.model'; // Adjust the import path as needed

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  @Input() songs: Song[] = [];
}

 */
