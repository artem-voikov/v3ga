import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/Vehicle';

@Component({
  selector: 'app-vehicles-overview',
  templateUrl: './vehicles-overview.component.html',
  styleUrls: ['./vehicles-overview.component.css']
})
export class VehiclesOverviewComponent implements OnInit {

  vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
