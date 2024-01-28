import { Injectable, signal } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = signal<Task[]>([])
  constructor() { }
}
