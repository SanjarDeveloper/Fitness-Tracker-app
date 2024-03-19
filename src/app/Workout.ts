import { WorkoutType } from "./WorkoutType";

export interface Workout{
    id:number,
    duration:number,
    calories_burned:number,
    workoutTypeID:number,
    workoutType:WorkoutType

}