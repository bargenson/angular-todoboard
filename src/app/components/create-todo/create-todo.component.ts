import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: [
    './create-todo.component.css'
  ]
})
export class CreateTodoComponent implements OnInit {

  model: Todo;
  @Output() onCreate = new EventEmitter<Todo>();

  constructor() {
    this.initModel();
  }

  private initModel() {
    this.model = {} as Todo;
  }

  ngOnInit(): void {
    if (!this.onCreate) {
      throw new Error('onCreate handler is mandatory');
    }
  }

  createTodo(): void {
    if (this.isValid()) {
      this.onCreate.emit(this.model);
      this.model = {} as Todo;
    }
  }

  private isValid(): boolean {
    return !!this.model.description;
  }

}
