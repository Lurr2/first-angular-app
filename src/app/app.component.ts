import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public card: any[] = [];
  public cars: any[] = [];
  public someData = "ze zmiennej";
  public markiSamochodow = [
    "Toyota",
    "Ford",
    "BMW",
    "Volkswagen",
    "Audi"
];
constructor(private cardService: CardService, private carsService: CarsService) {}

ngOnInit() {
  this.carsService.getData().subscribe(data => {
    this.cars = data;
  });
  this.cardService.getdata().subscribe(clue => {
    this.card = clue;
  })

}

  title = 'first-angular-app';
}
