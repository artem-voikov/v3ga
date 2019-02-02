import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/Vehicle';
import { VehicleState } from '../../services/VehicleState';

@Component({
  selector: 'app-vehicle-details-hull',
  templateUrl: './vehicle-details-hull.component.html',
  styleUrls: ['./vehicle-details-hull.component.css']
})
export class VehicleDetailsHullComponent implements OnInit {
  identifer: any;

  vehicle: Vehicle;

  constructor(private router: Router, private route: ActivatedRoute, private vehicleService: VehicleService, private vehicleState: VehicleState) {
    this.route.paramMap
      .subscribe(x=> {
        const id = this.identifer = x.get('id');

        this.vehicleState.vehicle = vehicleService.getVehicle(id);
      });
  }

  ngOnInit() {}
}
