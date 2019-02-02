import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { HttpModule } from '@angular/http';
import { MyHelper } from './myHelper';
import { VehicleState } from './VehicleState';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [VehicleService, MyHelper, VehicleState]
})
export class ServicesModule { }
