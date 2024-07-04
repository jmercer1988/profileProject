import { Component, Input } from '@angular/core';
import { JmFormatDatePipe } from "../../pipes/jm-format-date.pipe";
import { CommonModule } from '@angular/common';

interface ColumnConfig {
  field: string;
  header: string;
  type?: 'date' | 'number' | 'currency';
}

@Component({
    selector: 'jm-grid-data-display',
    standalone: true,
    templateUrl: './grid-data-display.component.html',
    styleUrl: './grid-data-display.component.scss',
    imports: [JmFormatDatePipe, CommonModule]
})
export class GridDataDisplayComponent {
  @Input() data: any[] = [];
  @Input() columns: ColumnConfig[] = [];
  @Input() customClass: string = '';
}
