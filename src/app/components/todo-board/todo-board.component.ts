import { Component } from '@angular/core';
import { TodoStatus } from '../../models/todo-status';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html'
})
export class TodoBoardComponent {

  TodoStatus = TodoStatus;

  constructor(private todoService: TodoService) {
  }

  get openTodos() {
    return this.todoService.getTodos().filter(todo => todo.status === TodoStatus.OPEN);
  }

  get todosInProgress() {
    return this.todoService.getTodos().filter(todo => todo.status === TodoStatus.IN_PROGRESS);
  }

  get doneTodos() {
    return this.todoService.getTodos().filter(todo => todo.status === TodoStatus.DONE);
  }

  createTodo(todo): void {
    this.todoService.createTodo(todo);
  }

  updateTodo(status, todo) {
    todo.status = status;
    this.todoService.updateTodo(todo);
  }

}
