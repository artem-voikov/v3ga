import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { SaveVehicle, Vehicle, Contact } from '../../models/Vehicle';

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
  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: ''
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private toasyService: ToastyService
  ) {
    route.params.subscribe(x => {
      console.log(x);
      this.vehicle.id = +x['id'];
    });
  }

  submit() {
    if (this.vehicle.id) {
      this.vehicleService.updateVehicle(this.vehicle).subscribe(x => {
        this.toasyService.success({
          title: 'good',
          msg: 'the vehicle has been saved',
          theme: 'bootstrap',
          showClose: true,
          timeout: 1000
        });
      });
    } else {
      this.vehicleService.create(this.vehicle).subscribe(x => console.log(x));
    }
  }

  ngOnInit() {
    const sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures()
    ];

    if (this.vehicle.id) {
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));
    }

    Observable.forkJoin(sources).subscribe(data => {
      console.log(data);
      this.makes = data[0];
      this.features = data[1];

      if (this.vehicle.id) {
        this.setVehicle(data[2]);
        this.populateModels();
      }
    });
  }

  onMakeChange() {
    this.populateModels();

    delete this.vehicle.modelId;
  }

  private populateModels() {
    // tslint:disable-next-line:triple-equals
    const selectedMake = this.makes.find(x => x.id == this.vehicle.makeId);

    console.log([selectedMake, this.makes, this.vehicle]);

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

  setVehicle(v: Vehicle) {
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');
  }

  delete() {
    if (confirm('Ar you sure?')) {
      this.vehicleService.delete(this.vehicle.id).subscribe(x => {
        this.router.navigate(['/']);
      });
    }
  }
}
