import { Component, OnInit } from '@angular/core';
import { TodoStatus } from '../../models/todo-status';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html'
})
export class TodoBoardComponent implements OnInit {

  TodoStatus = TodoStatus;
  openTodos: Todo[] = [];
  todosInProgress: Todo[] = [];
  doneTodos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  private loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.openTodos = todos.filter(todo => todo.status === TodoStatus.OPEN);
      this.todosInProgress = todos.filter(todo => todo.status === TodoStatus.IN_PROGRESS);
      this.doneTodos = todos.filter(todo => todo.status === TodoStatus.DONE);
    });
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  updateTodo(status, todo) {
    todo.status = status;
    this.todoService.updateTodo(todo).subscribe(() => {
      this.loadTodos();
    });
  }

}
