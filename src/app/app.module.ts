import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaceComponent } from './components/place/place.component';
// our service which talks to the server api. listed as "provider" below
import { PlaceService } from './services/place.service';
// HttpClientModule to make http requests to the server api
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlaceService],
  bootstrap: [PlaceComponent]
})
export class AppModule { }
