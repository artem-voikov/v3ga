import { browser } from 'protractor';
// import { AppErrorHandler } from './AppErrorHandler';
import { ServicesModule } from './services/services.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ComponentsModule } from './components/components.module';
import { ToastyModule } from 'ng2-toasty';

import * as Sentry from '@sentry/browser';
import { appRoutes } from './app-routes';
import { VehiclesOverviewComponent } from './components/vehicles-overview/vehicles-overview.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { AppErrorHandler } from './AppErrorHandler';

Sentry.init({
  dsn: 'https://2ea8f4977db64fb9bbd416a807332f09@sentry.io/1327135'
});

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ComponentsModule,
    ServicesModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
