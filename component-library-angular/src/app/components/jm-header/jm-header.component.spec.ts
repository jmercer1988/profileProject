import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmHeaderComponent } from './jm-header.component';

describe('JmHeaderComponent', () => {
  let component: JmHeaderComponent;
  let fixture: ComponentFixture<JmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
