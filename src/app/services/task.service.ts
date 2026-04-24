import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();
  readonly doingTasks = this.doingTasks$.asObservable();
  readonly doneTasks = this.doneTasks$.asObservable();

  getTodoTasks(): Observable<ITask[]> {
    return this.todoTasks;
  }

  getDoingTasks(): Observable<ITask[]> {
    return this.doingTasks;
  }

  getDoneTasks(): Observable<ITask[]> {
    return this.doneTasks;
  }
}
