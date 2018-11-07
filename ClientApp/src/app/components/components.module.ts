import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [VehicleFormComponent],
  exports: [VehicleFormComponent]
})
export class ComponentsModule {}
