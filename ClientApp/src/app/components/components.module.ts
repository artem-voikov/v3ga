import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VehicleFormComponent],
  exports: [VehicleFormComponent]
})
export class ComponentsModule {}
