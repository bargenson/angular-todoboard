import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoStatus } from '../models/todo-status';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const BACKEND_BASE_URL = 'http://localhost:8080/todos';

@Injectable()
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  createTodo(todo): Observable<Todo> {
    return this.httpClient.post<Todo>(
      `${BACKEND_BASE_URL}`,
      Object.assign({}, todo, { status: TodoStatus[TodoStatus.OPEN] }),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  updateTodo(newTodo): Observable<void> {
    return this.httpClient.put<void>(
      `${BACKEND_BASE_URL}/${newTodo.id}`,
      Object.assign({}, newTodo, { status: TodoStatus[newTodo.status] }),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${BACKEND_BASE_URL}`)
      .map(
        todos => todos.map(
          todo => Object.assign({}, todo, { status: TodoStatus[todo.status] })
        )
      );
  }

  getTodoById(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(`${BACKEND_BASE_URL}/${id}`)
      .map(todo => Object.assign({}, todo, { status: TodoStatus[todo.status] }));
  }

}
