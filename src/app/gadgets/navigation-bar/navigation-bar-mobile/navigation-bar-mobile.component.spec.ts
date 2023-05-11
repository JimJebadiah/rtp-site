import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarMobileComponent } from './navigation-bar-mobile.component';

describe('NavigationBarMobileComponent', () => {
  let component: NavigationBarMobileComponent;
  let fixture: ComponentFixture<NavigationBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
