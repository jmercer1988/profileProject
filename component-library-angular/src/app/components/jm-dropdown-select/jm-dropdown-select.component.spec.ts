import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmDropdownSelectComponent } from './jm-dropdown-select.component';

describe('JmDropdownSelectComponent', () => {
  let component: JmDropdownSelectComponent;
  let fixture: ComponentFixture<JmDropdownSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmDropdownSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JmDropdownSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
