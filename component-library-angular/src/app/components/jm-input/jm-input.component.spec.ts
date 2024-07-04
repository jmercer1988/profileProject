import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmInputComponent } from './jm-input.component';

describe('JmInputComponent', () => {
  let component: JmInputComponent;
  let fixture: ComponentFixture<JmInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
