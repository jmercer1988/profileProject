import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmCardComponent } from './jm-card.component';

describe('JmCardComponent', () => {
  let component: JmCardComponent;
  let fixture: ComponentFixture<JmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
