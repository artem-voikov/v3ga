import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Vehicle } from "../../models/Vehicle";
import { VehicleService } from "../../services/vehicle.service";
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VehicleState } from '../../services/VehicleState';

@Component({
  selector: "app-vehicle-details",
  templateUrl: "./vehicle-details.component.html",
  styleUrls: ["./vehicle-details.component.css"]
})
export class VehicleDetailsComponent implements OnInit {
  id: number;
  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router,
    private vehicleState: VehicleState
  ) {
    // route.params.subscribe(x => console.log(x));

    // this.route.paramMap.pipe(x=> x).subscribe(x=> console.log(x));
  }

  ngOnInit() {
    this.vehicleState.vehicle.subscribe(x=> this.vehicle = x);
  }
}
