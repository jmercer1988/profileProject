import { Component, Input } from '@angular/core';
import {VcButtonComponent} from "../default-assets/vc-button/vc-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'vc-top-banner',
  templateUrl: './top-banner.component.html',
  standalone: true,
  imports: [
    VcButtonComponent
  ],
  styleUrl: './top-banner.component.scss'
})
export class TopBannerComponent {
  @Input() bandName: string = '';
  @Input() bandImage: string = '';
  @Input() bandBio: string = '';
  @Input() bandHometown: string = '';

  constructor(private router: Router) { }

  // You can add additional logic or lifecycle hooks as needed
  handleButtonClick() {
    this.router.navigate(['./login']);
  }
}
