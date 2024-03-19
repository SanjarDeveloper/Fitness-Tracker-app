import { Component, OnInit, inject } from '@angular/core';
import { ServiceWorkoutService } from '../../service-workout.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from '../../Workout';
import { WorkoutType } from '../../WorkoutType';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  workoutService = inject(ServiceWorkoutService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router); 
  // editWorkout:any = {
  //   duration:0,
  //   calories_burned:0,
  //   workoutTypeID:0
  // }
  // WorkoutTypeObject: any; // Category Object for listing
  workoutTypes:WorkoutType[]=[]
  WorkoutType:WorkoutType = {
    id:0,
    name:""
  }
  editWorkout:Workout = {
    id:0,
  duration: 0,
  calories_burned: 0,
  workoutTypeID: 0,
  workoutType:{
    id:0,
    name:""
  }
  }
  workoutTypeObject:any
  selected: any // if any selected by default
  selectedWorkoutTypeID:number=0;
  
  ngOnInit() {
    this.workoutService.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
    this.editWorkout = result;
    this.selected = this.editWorkout.workoutTypeID;
    this.workoutService.getAllWorkoutTypes().subscribe((result) => {
      this.workoutTypes = result;
      });
    });
    
  }

  toHome() {
    this.router.navigateByUrl("home")
  }
      
  edit() {
    this.editWorkout.workoutTypeID = this.selectedWorkoutTypeID;
    this.editWorkout.workoutType = this.workoutTypes[findIndexByID(this.workoutTypes, this.selectedWorkoutTypeID)];
    this.workoutService.edit(this.editWorkout).subscribe(res=>{
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }
}
