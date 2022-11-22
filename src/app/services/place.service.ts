import { Injectable } from '@angular/core';

// import HttpClient to make HTTP calls to server API
import { HttpClient } from '@angular/common/http'

// ref to environment to read the server API URL
import { environment } from 'src/environments/environment';

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
}
