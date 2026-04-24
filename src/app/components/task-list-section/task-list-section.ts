import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCard],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection implements OnInit {
  private readonly _taskService = inject(TaskService);

  ngOnInit() {
    this._taskService.todoTasks.subscribe((todoList) => {
      console.log('Lista de tarefas TODO:', todoList);
    });
  }
}
