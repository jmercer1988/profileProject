import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPageLandingPageComponent } from './primary-page-landing-page.component';

describe('PrimaryPageLandingPageComponent', () => {
  let component: PrimaryPageLandingPageComponent;
  let fixture: ComponentFixture<PrimaryPageLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryPageLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryPageLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
