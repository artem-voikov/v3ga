import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeService } from './make.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [MakeService]
})
export class ServicesModule { }
