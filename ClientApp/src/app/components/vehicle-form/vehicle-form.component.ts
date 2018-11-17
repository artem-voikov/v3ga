import { Vehicle } from './../../models/Vehicle';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  makeId: any = {};
  features: any;

  vehicle: Vehicle = new Vehicle();

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {

    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
    });

    this.vehicleService.getFeatures().subscribe(x => this.features = x);
  }

  onMakeChange() {
    // tslint:disable-next-line:triple-equals
    const selectedMake = this.makes.find(x => x.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
