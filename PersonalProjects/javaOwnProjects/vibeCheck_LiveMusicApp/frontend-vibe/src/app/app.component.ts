import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBannerComponent } from "./component/top-banner/top-banner.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
// ... other imports ...

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBannerComponent, SidebarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vibe Check';
}
