import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { User } from "../../model/user";

@Component({
  selector: 'vs-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './registration.component.scss',
  providers: [AuthService]
})
export class RegistrationComponent {
  userData: User = { username: '', email: '', password: '' };

  constructor(private authService: AuthService) { }

  onRegister(): void {
    this.authService.register(this.userData).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
