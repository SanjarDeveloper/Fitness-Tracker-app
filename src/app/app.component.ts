import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Workout } from './Workout';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,HomeComponent,NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-tracker-app';
  workouts:Workout[]=[
    {
      "id": 1,
      "duration": 15,
      "calories_burned": 50,
      "workoutTypeID": 1,
      "workoutType": {
        "id": 1,
        "name": "Running"
      }
    },
    {
      "id": 2,
      "duration": 20,
      "calories_burned": 65,
      "workoutTypeID": 5,
      "workoutType": {
        "id": 5,
        "name": "Cycling"
      }
    },
    {
      "id": 3,
      "duration": 5,
      "calories_burned": 15,
      "workoutTypeID": 3,
      "workoutType": {
        "id": 3,
        "name": "Walking"
      }
    },
    {
      "id": 4,
      "duration": 18,
      "calories_burned": 30,
      "workoutTypeID": 2,
      "workoutType": {
        "id": 2,
        "name": "Walking"
      }
    },{
      "id": 5,
      "duration": 35,
      "calories_burned": 150,
      "workoutTypeID": 4,
      "workoutType": {
        "id": 4,
        "name": "Push up"
      }
    },
  ]
}
