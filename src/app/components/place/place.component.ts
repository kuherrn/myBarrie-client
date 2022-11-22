import { Component, OnInit } from '@angular/core';

// reference service which fetches data from api
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})
export class PlaceComponent implements OnInit {
  // add dependency on service in constructor. This component MUST have the service available.
  constructor(private service: PlaceService) { }

  places: any

  // fetch all places from service
  getPlaces(): void {
    this.service.getPlaces().subscribe(response => {
      this.places = response
    })
    console.log(this.places)
  }

  // fetch data whenever this component is instantiated
  ngOnInit() {
    this.getPlaces()
  }
}
