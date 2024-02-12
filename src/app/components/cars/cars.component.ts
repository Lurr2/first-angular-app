import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: any[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getData().subscribe(data => {
      this.cars = data;
    });
  }

}
