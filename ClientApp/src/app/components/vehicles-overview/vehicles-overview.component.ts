import { Component, OnInit } from '@angular/core';
import { MyVehicle, Vehicle, KeyValuePair } from '../../models/Vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Page } from '../../models/Page';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vehicles-overview',
  templateUrl: './vehicles-overview.component.html',
  styleUrls: ['./vehicles-overview.component.css']
})
export class VehiclesOverviewComponent implements OnInit {
  vehicles: Vehicle[];
  allVehicles: Vehicle[];
  makes: KeyValuePair[];
  filter: Page = this.basePage();

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    const pg = this.basePage();

    const sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getVehicles(pg)
    ];
    Observable.forkJoin(sources).subscribe(x => {
      this.makes = x[0];
      this.vehicles = this.allVehicles = x[1];
    });

    // this.InitMakes();
    // this.getVehicles();
  }

  InitMakes(): any {
    this.vehicleService.getMakes().subscribe(x => {
      this.makes = x;
    });
  }

  getVehicles(page: Page) {
    page = page ? page : this.basePage();

    this.vehicleService.getVehicles(page).subscribe(x => {
      this.vehicles = x;
    });
  }

  basePage() {
    const page = new Page();
    page.filtering = '';
    page.pageLength = 10;
    page.pageNumber = 0;
    page.sorting = '';

    return page;
  }

  filterByMake() {
    console.log([this.vehicles, this.filter, this.allVehicles]);
    const vehicles = this.allVehicles.filter(
      x => this.filter && this.filter.filtering ? x.make.id === Number(this.filter.filtering) : true
    );

    console.log([vehicles, this.filter, this.allVehicles]);

    this.vehicles = vehicles;
  }

  onResetFilter() {
    this.filter.filtering = '';
    this.filterByMake();
  }
}
