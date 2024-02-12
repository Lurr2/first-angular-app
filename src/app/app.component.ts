import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public someData = "ze zmiennej";
  public markiSamochodow = [
    "Toyota",
    "Ford",
    "BMW",
    "Volkswagen",
    "Audi"
];

  title = 'first-angular-app';
}
