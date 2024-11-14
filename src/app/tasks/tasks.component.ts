import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: string[] = [];  // Armazena as tarefas
  newTask: string = '';  // Armazena a nova tarefa digitada

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());  // Adiciona a tarefa
      this.newTask = '';  // Limpa o campo
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);  // Remove a tarefa
  }
}
