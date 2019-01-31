import { Routes } from '@angular/router';
import { VehiclesOverviewComponent } from './components/vehicles-overview/vehicles-overview.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'vehicles', component: VehiclesOverviewComponent },
  // { path: 'vehicle/new', component: VehicleFormComponent },
  // { path: 'vehicle/:id', component: VehicleFormComponent },
  // { path: 'vehicle', loadChildren: './components/vehicle-routing.module#VehicleRoutingModule', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, outlet: 'root' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
];
