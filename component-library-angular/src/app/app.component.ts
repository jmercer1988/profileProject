import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JmInputComponent } from "./components/jm-input/jm-input.component";
import { JmDropdownSelectComponent } from "./components/jm-dropdown-select/jm-dropdown-select.component";
import { FormControl } from '@angular/forms';
import { GridDataDisplayComponent } from "./components/grid-data-display/grid-data-display.component";
import { JmCardComponent } from "./components/jm-card/jm-card.component";
import { JmHeaderComponent } from "./components/jm-header/jm-header.component";
import { NavLink } from "./components/jm-header/jm-header.component"
import { JmFooterComponent } from "./components/jm-footer/jm-footer.component";
import { NavLinksService } from './services/nav-links.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        JmInputComponent,
        JmDropdownSelectComponent,
        GridDataDisplayComponent,
        JmCardComponent,
        JmHeaderComponent,
        JmFooterComponent,
    ]
})
export class AppComponent {

  constructor(private navLinksService: NavLinksService){

  }

  headerLinks = this.navLinksService.headerLinks;
  footerLinks = this.navLinksService.footerLinks;
  
}
