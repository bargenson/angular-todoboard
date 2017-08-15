import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: [
    './create-todo.component.css'
  ]
})
export class CreateTodoComponent implements OnInit {

  dueDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };

  model: Todo;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {
    this.initModel();
  }

  private initModel() {
    this.model = {} as Todo;
  }

  ngOnInit(): void {}

  onDateChanged(event: IMyDateModel): void {
    this.model.dueDate = event.jsdate;
  }

  createTodo(): void {
    if (this.isValid()) {
      this.todoService.createTodo(this.model).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  private isValid(): boolean {
    return !!this.model.description;
  }

}
