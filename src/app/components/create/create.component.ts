import { Component,inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceWorkoutService} from '../../service-workout.service';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WorkoutType } from '../../WorkoutType';
import { Workout } from '../../Workout';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,MatChipsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  workoutService = inject(ServiceWorkoutService);
  router = inject(Router);
  workoutTypes:WorkoutType[]=[];
  selectedWorkoutID:number=0;
  WorkoutType:WorkoutType = {
    id:0,
    name:""
  }
  createWorkout:Workout = {
    id:0,
  duration: 0,
  calories_burned: 0,
  workoutTypeID: 0,
  workoutType:this.WorkoutType
  }

  ngOnInit(){
    this.workoutService.getAllWorkoutTypes().subscribe((result)=>{
      this.workoutTypes = result
    });
  };

  create(){
    this.createWorkout.workoutTypeID=this.selectedWorkoutID
    this.workoutTypes.forEach(element => {
      if(element.id == this.selectedWorkoutID){
          this.WorkoutType.id = element.id
          this.WorkoutType.name = element.name
      }
    });
    console.log(this.createWorkout)
    this.workoutService.create(this.createWorkout).subscribe(result=>{
      alert("Item Saved")
      this.router.navigateByUrl("home")
    });
  };

}
