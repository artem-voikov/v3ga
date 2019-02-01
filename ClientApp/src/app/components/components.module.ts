import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
// import { AppErrorHandler } from '../AppErrorHandler';
import { VehiclesOverviewComponent } from './vehicles-overview/vehicles-overview.component';
import { RouterModule, Route } from '@angular/router';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { VehiclePreferencesComponent } from './vehicle-preferences/vehicle-preferences.component';
import { VehicleDetailsHullComponent } from './vehicle-details-hull/vehicle-details-hull.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclePhotoEditingComponent } from './vehicle-photo-editing/vehicle-photo-editing.component';
import { VehicleRoutingModule } from './/vehicle-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, VehicleRoutingModule],
  declarations: [VehicleFormComponent,
    VehiclesOverviewComponent,
    PhotoViewerComponent,
    VehiclePreferencesComponent,
    VehicleDetailsHullComponent,
    VehicleDetailsComponent,
    VehiclePhotoEditingComponent],
  exports: [VehicleFormComponent, VehicleRoutingModule],
})
export class ComponentsModule {}
