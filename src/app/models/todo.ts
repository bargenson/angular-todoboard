import { TodoStatus } from './todo-status';

export class Todo {

  id: string;
  description: string;
  dueDate: Date;
  status: TodoStatus;

  constructor(id: string, description: string, status: TodoStatus) {
    this.id = id;
    this.description = description;
    this.status = status;
  }

}
