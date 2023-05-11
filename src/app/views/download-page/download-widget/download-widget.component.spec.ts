import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadWidgetComponent } from './download-widget.component';

describe('DownloadWidgetComponent', () => {
  let component: DownloadWidgetComponent;
  let fixture: ComponentFixture<DownloadWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
