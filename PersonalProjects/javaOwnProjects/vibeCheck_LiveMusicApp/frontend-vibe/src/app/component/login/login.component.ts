import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {VcButtonComponent} from "../default-assets/vc-button/vc-button.component";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    VcButtonComponent
  ],
  styleUrl: 'login.component.scss'
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService) { }

  onLogin(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe(response => {
      // Assuming the response contains username and password
      const myusername = response.username;
      const mypassword = response.password;

      // Handle the response here
    });
}
}
