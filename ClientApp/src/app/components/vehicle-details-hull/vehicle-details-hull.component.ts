import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details-hull',
  templateUrl: './vehicle-details-hull.component.html',
  styleUrls: ['./vehicle-details-hull.component.css']
})
export class VehicleDetailsHullComponent implements OnInit {
  identifer: number;

  thing: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(x => {
      this.identifer = this.route.snapshot.paramMap['id'];
      console.log(this.identifer);
    });


    this.route.queryParams.subscribe(x => (this.thing = x));
  }

  ngOnInit() {}
}
