import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [
    './todo-list.component.css'
  ]
})
export class TodoListComponent implements OnInit {

  @Input() title: string;
  @Input() todos: Todo[];
  @Output() onTodoDrop = new EventEmitter<Todo>();

  ngOnInit(): void {
    if (!this.title) {
      throw new Error('title attribute is mandatory');
    }
    if (!this.todos) {
      throw new Error('todos attribute is mandatory');
    }
  }

  updateTodo(todo) {
    this.onTodoDrop.emit(todo);
  }

}
