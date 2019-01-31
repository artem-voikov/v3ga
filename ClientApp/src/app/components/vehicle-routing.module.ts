import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route } from '@angular/router';
import { VehicleDetailsHullComponent } from './vehicle-details-hull/vehicle-details-hull.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclePhotoEditingComponent } from './vehicle-photo-editing/vehicle-photo-editing.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

const vehicleRoute: Routes = [
  { path: '', component: VehicleDetailsHullComponent, children: [
    { path: ':id/photo', component: VehiclePhotoEditingComponent },
    { path: ':id', component: VehicleDetailsComponent},
    { path: ':id/new', component: VehicleFormComponent },
    { path: ':id/edit', component: VehicleFormComponent }
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(vehicleRoute)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }