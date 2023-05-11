import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinataPageComponent } from './pinata-page.component';

describe('PinataPageComponent', () => {
  let component: PinataPageComponent;
  let fixture: ComponentFixture<PinataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
