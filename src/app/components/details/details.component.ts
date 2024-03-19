import { Component, OnInit, inject} from '@angular/core';
import { Workout} from '../../Workout';
import { ServiceWorkoutService} from '../../service-workout.service';
import { ActivatedRoute} from '@angular/router';
import { MatChipsModule} from '@angular/material/chips';
import { MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule,MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsWorkout:Workout={
    id:0,
    duration:0,
    calories_burned:0,
    workoutTypeID:0,
    workoutType:{
      id:0,
      name:""
    }

  }

  serviceWorkout = inject(ServiceWorkoutService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.serviceWorkout.getByID(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem)=>{
    this.detailsWorkout =resultedItem   
    });
  }

}
