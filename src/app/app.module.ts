import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { TodoService } from './services/todo.service';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AppRoutingModule } from './app-routing.module';
import { MyDatePickerModule } from 'mydatepicker';
import { DetailedTodoComponent } from './components/detailed-todo/detailed-todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoBoardComponent,
    TodoListComponent,
    CreateTodoComponent,
    DetailedTodoComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot(),
    AppRoutingModule,
    MyDatePickerModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
