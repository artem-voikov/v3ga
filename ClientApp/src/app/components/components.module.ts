import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { AppErrorHandler } from '../AppErrorHandler';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [VehicleFormComponent],
  exports: [VehicleFormComponent],
})
export class ComponentsModule {}
