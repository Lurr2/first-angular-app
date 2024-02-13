import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestItemComponent } from './components/common/test-item/test-item.component';
import { CarsComponent } from './components/cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './services/cars.service';
import { CardComponent } from './components/common/card/card.component';
import { ButtonComponent } from './components/common/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestItemComponent,
    CarsComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
