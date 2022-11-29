import { Injectable } from '@angular/core';

// import HttpClient & HttpHeaders to make HTTP calls to server API
import { HttpClient, HttpHeaders } from '@angular/common/http'

// ref to environment to read the server API URL
import { environment } from 'src/environments/environment';

// HttpHeaders needed for POST and PUT requests
let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  // set server URL as class level var re-used in all http requests
  serverUrl: string = environment.serverUrl

  constructor(private http: HttpClient) { }

  // get all places
  getPlaces() {
    return this.http.get(`${this.serverUrl}/api/places`)
  }

  // add place
  addPlace(place: any) {
    return this.http.post(`${this.serverUrl}/api/places`, place, {headers: headers})
  }

  // delete place
  deletePlace(_id: string) {
    return this.http.delete(`${this.serverUrl}/api/places/${_id}`)
  }

  // update place
  updatePlace(place: any) {
    return this.http.put(`${this.serverUrl}/api/places/${place._id}`, place, {headers: headers})
  }
}
