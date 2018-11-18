import { Vehicle } from './../../models/Vehicle';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/make.service';
import { ToastyService } from 'ng2-toasty';

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
  vehicle: any = {
    features: [],
    contact: {}
  };

  constructor(private vehicleService: VehicleService,
    private toasyService: ToastyService) { }

  submit() {
    this.vehicleService.create(this.vehicle)
      .subscribe(x => console.log(x),
        err => {
        });
  }

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

  onFeatureToggle(featureId, $event) {
    if ($event.target.checked) {
      this.vehicle.features.push(featureId);
    } else {
      const index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }
}
