import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})


export class HeaderComponent {
@Output() searchQuery = new EventEmitter<string>();
  
onSearch(query: string) {
    this.searchQuery.emit(query);
  }
}
