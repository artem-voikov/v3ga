import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { HttpModule } from '@angular/http';
import { MyHelper } from './myHelper';
import { VehicleState } from './VehicleState';
import { PhotoService } from './photo.service';
import { ProgressService } from './progress.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [VehicleService, MyHelper, VehicleState, PhotoService, ProgressService]
})
export class ServicesModule { }
