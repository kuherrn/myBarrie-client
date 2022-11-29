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
  _id: string | undefined
  name: string | undefined
  location: string | undefined
  description: string | undefined
  category: string | undefined

  // fetch all places from service
  getPlaces(): void {
    this.service.getPlaces().subscribe(response => {
      this.places = response
    })
    //console.log(this.places)
  }

  // create a new place to be sent to the service
  addPlace(): void {
    let place = {
      name: this.name,
      location: this.location,
      description: this.description,
      category: this.category
    }

    this.service.addPlace(place).subscribe(response => {
      // update the list
      this.getPlaces()

      // clear the form
      this.clearForm()
    })
  }

  clearForm(): void {
    this._id = undefined
    this.name = undefined
    this.location = undefined
    this.description = undefined
    this.category = undefined
  }

  selectPlace(_id: string, name: string, location: string, description: string, category:string): void {
    this._id = _id
    this.name = name
    this.location = location
    this.description = description
    this.category = category
  }

  // fetch data whenever this component is instantiated
  ngOnInit() {
    this.getPlaces()
  }
}
