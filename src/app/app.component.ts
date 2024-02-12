import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cars: any[] = [];
  public someData = "ze zmiennej";
  public markiSamochodow = [
    "Toyota",
    "Ford",
    "BMW",
    "Volkswagen",
    "Audi"
];
constructor(private carsService: CarsService) {}

ngOnInit() {
  this.carsService.getData().subscribe(data => {
    this.cars = data;
  });
}

  title = 'first-angular-app';
}
