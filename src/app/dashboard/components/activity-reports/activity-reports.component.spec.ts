import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReportsComponent } from './activity-reports.component';

describe('ActivityReportsComponent', () => {
  let component: ActivityReportsComponent;
  let fixture: ComponentFixture<ActivityReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
