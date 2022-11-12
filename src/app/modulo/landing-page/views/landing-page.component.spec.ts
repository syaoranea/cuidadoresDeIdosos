import { ComponentFixture, TestBed } from '@angular/core/testing';

import { landingPageComponent } from './landing-page.component';

describe('ViewsComponent', () => {
  let component: landingPageComponent;
  let fixture: ComponentFixture<landingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [landingPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(landingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
