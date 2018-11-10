import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './make.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [VehicleService]
})
export class ServicesModule { }
