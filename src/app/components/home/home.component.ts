import { Component, Input, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { Workout } from '../../Workout';
import { ServiceWorkoutService } from '../../service-workout.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutType } from '../../WorkoutType';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  workoutService = inject(ServiceWorkoutService);
  router = inject(Router)
  workoutTypes: WorkoutType[] = [];
  workouts: Workout[] = [];

  ngOnInit() {
    this.workoutService.getAllWorkoutTypes().subscribe((wTypes) => {
      this.workoutTypes = wTypes

      this.workoutService.getAllWorkouts().subscribe((result) => {


        result.forEach(wItem => {
          this.workoutTypes.forEach(wtItem => {
            if (wItem.workoutTypeID == wtItem.id) {
              wItem.workoutType = wtItem
            }
          })
        });
  
        this.workouts = result
        // console.log(result.forEach(ite=>console.log(ite)))
      });
    });
    
    

    

    // this.workouts.forEach(wItem=>{
    //   this.workoutTypes.forEach(wtItem=>{
    //     if(wItem.workoutTypeID == wtItem.id){
    //       ob.id = wtItem.id
    //       ob.name = wtItem.name
    //       wItem.workoutType = ob
    //       console.log(ob)
    //     }
    //   })
    // });

  }
  //@Input() items:any;
  displayedColumns: string[] = ['ID', 'Duration', 'Calories_burned', 'WorkoutType Name', 'Actions'];


  EditClicked(itemID: number) {
    // console.log(itemID, "From Edit")
    // console.log(this.workoutTypes.forEach(item=>{console.log(item.name)}))
    console.log(this.workouts)
    this.router.navigateByUrl("/edit/" + itemID);
  };
  DetailsClicked(itemID: number) {
    console.log(itemID, "From Details")
    this.router.navigateByUrl("/details/" + itemID);
  };
  DeleteClicked(itemID: number) {
    console.log(itemID, "From Delete")
    this.router.navigateByUrl("/delete/" + itemID);
  }
}
