import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyInfoComponent } from './warranty-info.component';

describe('WarrantyInfoComponent', () => {
  let component: WarrantyInfoComponent;
  let fixture: ComponentFixture<WarrantyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
