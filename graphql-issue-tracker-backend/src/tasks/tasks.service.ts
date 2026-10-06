import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Изучить GraphQL',
      status: 'NEW',
      assigneeId: 1,
    },
    {
      id: 2,
      title: 'Сделать React клиент',
      status: 'NEW',
      assigneeId: 2,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(title: string): Task {
    const task: Task = {
      id: Date.now(),
      title,
      status: 'NEW',
    };

    this.tasks.push(task);

    return task;
  }
}