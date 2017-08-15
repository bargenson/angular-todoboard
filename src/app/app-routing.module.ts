import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { DetailedTodoComponent } from './components/detailed-todo/detailed-todo.component';

const routes: Routes = [
  { path: '', component: TodoBoardComponent },
  { path: 'new', component: CreateTodoComponent },
  { path: 'todo/:id', component: DetailedTodoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
