import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { ITaskFormControls } from '../interfaces/task-form-controls.interface';
import { ITask } from '../interfaces/task.interface';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';

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

  addTask(taskInfos: ITaskFormControls): void {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: [],
    };

    const currentList = this.todoTasks$.getValue();
    this.todoTasks$.next([...currentList, newTask]);
  }
}
