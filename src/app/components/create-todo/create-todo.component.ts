import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: [
    './create-todo.component.css'
  ]
})
export class CreateTodoComponent {

  model: Todo;
  @Output() onCreate = new EventEmitter<Todo>();

  constructor() {
    this.initModel();
  }

  private initModel() {
    this.model = {} as Todo;
  }

  createTodo(): void {
    this.onCreate.emit(this.model);
    this.model = {} as Todo;
  }

}
