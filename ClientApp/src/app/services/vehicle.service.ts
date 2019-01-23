import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SaveVehicle } from '../models/Vehicle';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleService {

  delete(id: number): any {
    return this.http.delete('/api/vehicles/' + id).map(x => x.json());
  }

  updateVehicle(vehicle: SaveVehicle): any {
    return this.http
      .put('/api/vehicles/' + vehicle.id, vehicle)
      .map(x => x.json());
  }
  constructor(private http: Http) {}

  getMakes() {
    return this.http.get('/api/makes').map(res => res.json());
  }

  getFeatures() {
    return this.http.get('/api/features').map(x => x.json());
  }

  create(vehicle: any): any {
    return this.http.post('/api/vehicles', vehicle).map(x => x.json());
  }

  getVehicle(id) {
    return this.http.get('/api/vehicles/' + id).map(x => x.json());
  }
}
