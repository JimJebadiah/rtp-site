import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdditionsRootPageComponent } from './new-additions-root-page.component';

describe('NewAdditionsRootPageComponent', () => {
  let component: NewAdditionsRootPageComponent;
  let fixture: ComponentFixture<NewAdditionsRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdditionsRootPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdditionsRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
