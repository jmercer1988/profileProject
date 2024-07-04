import { Component, OnInit  } from '@angular/core';
import {UserService} from "../../services/user-service.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [UserService]
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser('someUserId').subscribe(user => {
      console.log(user);
      // Handle user data
    })
  }
}
