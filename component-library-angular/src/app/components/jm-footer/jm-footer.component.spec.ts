import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmFooterComponent } from './jm-footer.component';

describe('JmFooterComponent', () => {
  let component: JmFooterComponent;
  let fixture: ComponentFixture<JmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JmFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
