import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { AppErrorHandler } from '../AppErrorHandler';
import { VehiclesOverviewComponent } from './vehicles-overview/vehicles-overview.component';
import { RouterModule, Route } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [VehicleFormComponent, VehiclesOverviewComponent],
  exports: [VehicleFormComponent],
})
export class ComponentsModule {}
