import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todos } from '../model/Todos';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey = '4f5de71c9a97691f929a66fa9e6245c1';
  URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city) {
    return this.http.get(this.URL + city + '&APPID=' + this.APIkey);
  }

}