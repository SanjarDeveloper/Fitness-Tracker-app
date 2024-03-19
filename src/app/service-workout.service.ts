import { Injectable , Inject, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from './Workout';
import { WorkoutType } from './WorkoutType';


@Injectable({
  providedIn: 'root'
})
export class ServiceWorkoutService {
  httpclient = inject(HttpClient);
  constructor() { }

  getAllWorkouts(){
    return this.httpclient.get<Workout[]>("https://localhost:7210/api/Workout/GetAll")
  };

  getByID(id:number){
    return this.httpclient.get<Workout>("http://localhost:5246/api/Workout/GetByID/"+id)
  };

  edit(item:Workout){
    return this.httpclient.put("http://localhost:5246/api/Workout/Update/",item)
  }
  delete(id:number){
    return this.httpclient.delete("https://localhost:7210/api/Workout/Delete/"+id)
  }
  create(item:Workout){
    return this.httpclient.post<Workout>("http://localhost:5246/api/Workout/Create",item)
  }
  getAllWorkoutTypes(){
    return this.httpclient.get<WorkoutType[]>("http://localhost:5246/api/WorkoutType/Get/")
  }
  
}
