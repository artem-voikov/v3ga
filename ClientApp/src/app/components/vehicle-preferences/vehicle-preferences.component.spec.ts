import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePreferencesComponent } from './vehicle-preferences.component';

describe('VehiclePreferencesComponent', () => {
  let component: VehiclePreferencesComponent;
  let fixture: ComponentFixture<VehiclePreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
