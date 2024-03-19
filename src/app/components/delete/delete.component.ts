import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceWorkoutService } from '../../service-workout.service';
import { WorkoutType } from '../../WorkoutType';
import { Workout } from '../../Workout';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule,MatCardModule,MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteWorkout:Workout={
    id:0,
    duration:0,
    calories_burned:0,
    workoutTypeID:0,
    workoutType:{
      id:0,
      name:""
    }

  }

  service = inject(ServiceWorkoutService)
  activateRote= inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.service.getByID(this.activateRote.snapshot.params["id"]).subscribe((result)=>{
      this.deleteWorkout = result
    });
  }
  
  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }
  onDeleteButtonClick(id:number){
    this.service.delete(id).subscribe(r=>{
      this.router.navigateByUrl("home")
    });
  }
}
