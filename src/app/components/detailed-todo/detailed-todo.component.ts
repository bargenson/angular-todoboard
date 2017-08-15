import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detailed-todo',
  templateUrl: './detailed-todo.component.html'
})
export class DetailedTodoComponent implements OnInit {

  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((paramMap: ParamMap) => this.todoService.getTodoById(paramMap.get('id')))
      .subscribe(todo => {
        this.todo = todo;
      });
  }

}
