import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsHullComponent } from './vehicle-details-hull.component';

describe('VehicleDetailsHullComponent', () => {
  let component: VehicleDetailsHullComponent;
  let fixture: ComponentFixture<VehicleDetailsHullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDetailsHullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailsHullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
