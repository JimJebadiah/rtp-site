import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdditionsPageComponent } from './new-additions-page.component';

describe('NewAdditionsPageComponent', () => {
  let component: NewAdditionsPageComponent;
  let fixture: ComponentFixture<NewAdditionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdditionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdditionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
