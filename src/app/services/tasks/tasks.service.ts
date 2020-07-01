import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public todoTasks: Task[];
  public inProccessTasks: Task[];
  public finalizeTasks: Task[];

  constructor() {
    this.todoTasks = [
      new Task('Title task', 'Description'),
      new Task('Title2', 'Description2'),
      new Task('Title3', 'Description3'),
    ];
    this.inProccessTasks = [];
    this.finalizeTasks = [];
  }

  public addTask(title: string, description: string) {
    this.todoTasks.push(new Task(title, description));
  }

  public passToInProccess(id: number) {
    this.inProccessTasks.push(this.todoTasks.find((t: Task) => t.id === id));

    this.todoTasks = this.todoTasks.filter((t: Task) => t.id !== id);
  }

  public passToFinalized(id: number) {
    this.finalizeTasks.push(
      this.inProccessTasks.find((t: Task) => t.id === id)
    );

    this.inProccessTasks = this.inProccessTasks.filter(
      (t: Task) => t.id !== id
    );
  }

  public delete(id: number) {
    this.todoTasks = this.todoTasks.filter((t: Task) => t.id !== id);
  }

  public finalized(id: number) {
    this.finalizeTasks = this.finalizeTasks.filter((t: Task) => t.id !== id);
  }
}

class Task {
  id: number;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.id = Math.floor(Math.random() * 10000 + 1);
    this.title = title;
    this.description = description;
  }
}
