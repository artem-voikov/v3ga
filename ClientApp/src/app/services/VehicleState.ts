import { Vehicle } from '../models/Vehicle';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VehicleState {
    currentVehicle: Vehicle;
    vehicle: Observable<Vehicle>;
    vehicleId: number;
}