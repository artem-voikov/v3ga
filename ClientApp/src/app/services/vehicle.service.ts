import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SaveVehicle, KeyValuePair, Vehicle } from '../models/Vehicle';
import { Page } from '../models/Page';
import { Observable } from 'rxjs/Observable';
import { MyHelper } from './myHelper';

@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';

  delete(id: number): any {
    return this.http.delete('/api/vehicles/' + id).map(x => x.json());
  }

  updateVehicle(vehicle: SaveVehicle): any {
    return this.http
      .put('/api/vehicles/' + vehicle.id, vehicle)
      .map(x => x.json());
  }
  constructor(private http: Http, private helper: MyHelper) {}

  getMakes(): Observable<KeyValuePair[]> {
    return this.http.get('/api/makes').map(res => res.json());
  }

  getFeatures() {
    return this.http.get('/api/features').map(x => x.json());
  }

  create(vehicle: any): any {
    return this.http.post(this.vehiclesEndpoint, vehicle).map(x => x.json());
  }

  getVehicle(id) {
    return this.http.get( `${this.vehiclesEndpoint}/${id}`).map(x => x.json());
  }

  getVehicles(page: Page): Observable<Vehicle[]> {
    // tslint:disable-next-line:max-line-length
    // const url = `${this.vehiclesEndpoint}?pagenumber=${page.pageNumber}&pageLength=${page.pageLength}&sorting=${page.sorting}&filtering=${page.filtering}`;
    const query = this.helper.CreteQuery(page);

    const url = `${this.vehiclesEndpoint}?${query}`;

    return this.http.get(url).map(x => x.json());
  }

  getFiltered(filter): Observable<Vehicle[]> {
    const query = this.helper.CreteQuery(filter);
    const url = `${this.vehiclesEndpoint}/filtered?${query}`;

    return this.http.get(url).map(x => x.json());
  }
}
