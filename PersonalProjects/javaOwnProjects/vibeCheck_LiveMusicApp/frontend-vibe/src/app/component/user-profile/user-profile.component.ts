import { Component, Input } from '@angular/core';
import {NgForOf} from "@angular/common";

interface User {
  id: number;
  username: string;
  email: string;
  //location: string;
  /*
  * things to add in the future
  *
  * date of birth, message, subscribe, comment wall etc.
  *
  * */
  // Add more fields as necessary
}

interface Band {
  name: string;
  genre: string;
  albums: string;
  // Add more fields as necessary
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Input() user: User = { username: '', email: '', id: 0 }; // Default values
  @Input()
  followedBands: Band[] = [];
}
