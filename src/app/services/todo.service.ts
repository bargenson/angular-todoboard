import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoStatus } from '../models/todo-status';

@Injectable()
export class TodoService {

  private todos = [] as Todo[];

  createTodo(todo): void {
    todo.status = TodoStatus.OPEN;
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
  }

  updateTodo(newTodo): void {
    const index = this.todos.findIndex(todo => todo.id === newTodo.id);
    this.todos[index] = newTodo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

}
