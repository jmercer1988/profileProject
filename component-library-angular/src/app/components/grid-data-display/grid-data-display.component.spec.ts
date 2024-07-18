import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDataDisplayComponent } from './grid-data-display.component';

describe('GridDataDisplayComponent', () => {
  let component: GridDataDisplayComponent;
  let fixture: ComponentFixture<GridDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridDataDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
