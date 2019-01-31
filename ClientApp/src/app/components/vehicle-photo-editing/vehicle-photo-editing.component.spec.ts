import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePhotoEditingComponent } from './vehicle-photo-editing.component';

describe('VehiclePhotoEditingComponent', () => {
  let component: VehiclePhotoEditingComponent;
  let fixture: ComponentFixture<VehiclePhotoEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePhotoEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePhotoEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
