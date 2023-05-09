import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarButtonComponent } from './navigation-bar-button.component';

describe('NavigationBarButtonComponent', () => {
  let component: NavigationBarButtonComponent;
  let fixture: ComponentFixture<NavigationBarButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarButtonComponent]
    });
    fixture = TestBed.createComponent(NavigationBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
