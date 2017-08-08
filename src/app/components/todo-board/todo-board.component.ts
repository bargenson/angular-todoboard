import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoStatus } from '../../models/todo-status';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html'
})
export class TodoBoardComponent {

  @Input() todos: Todo[];
  @Output() onTodoCreate = new EventEmitter<Todo>();
  @Output() onTodoUpdate = new EventEmitter<Todo>();
  TodoStatus = TodoStatus;

  get openTodos() {
    return this.todos.filter(todo => todo.status === TodoStatus.OPEN);
  }

  get todosInProgress() {
    return this.todos.filter(todo => todo.status === TodoStatus.IN_PROGRESS);
  }

  get doneTodos() {
    return this.todos.filter(todo => todo.status === TodoStatus.DONE);
  }

  createTodo(todo): void {
    this.onTodoCreate.emit(todo);
  }

  updateTodo(status, todo) {
    todo.status = status;
    this.onTodoUpdate.emit(todo);
  }

}
