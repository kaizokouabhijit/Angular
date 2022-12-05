import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/model/Todos';
import { TodoService, WeatherService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city = 'London';

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
    this._weatherService.getCurrentWeather(this.city).subscribe((res) => { console.log(res)});
  }
}
