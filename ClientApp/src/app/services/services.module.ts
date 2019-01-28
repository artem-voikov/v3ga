import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { HttpModule } from '@angular/http';
import { MyHelper } from './myHelper';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [VehicleService, MyHelper]
})
export class ServicesModule { }
