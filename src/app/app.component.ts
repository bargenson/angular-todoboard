import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { TodoStatus } from './models/todo-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [
    {
      id: 1,
      description: 'A simple todo',
      status: TodoStatus.OPEN
    },
    {
      id: 2,
      description: 'Another todo',
      status: TodoStatus.OPEN
    },
    {
      id: 3,
      description: 'Let\'s do it!',
      status: TodoStatus.IN_PROGRESS
    }
  ];

  createTodo(todo): void {
    todo.status = TodoStatus.OPEN;
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
  }

  updateTodo(newTodo): void {
    const index = this.todos.findIndex(todo => todo.id === newTodo.id);
    this.todos[index] = newTodo;
  }

}
