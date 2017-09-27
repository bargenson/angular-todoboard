import { TodoListComponent } from './todo-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';
import { Todo } from '../../models/todo';
import { MockComponent } from 'ng2-mock-component';

describe('TodoListComponent', () => {

  let comp:    TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        MockComponent({
          selector: '<app-todo>',
          inputs: ['todo']
        })
      ],
      imports: [
        DndModule.forRoot()
      ]
    });

    fixture = TestBed.createComponent(TodoListComponent);

    comp = fixture.componentInstance;
    comp.title = 'My list';
    comp.todos = [];

    de = fixture.debugElement.query(By.css('section'));
    el = de.nativeElement;
  });

  it('should display my todos as TodoComponents', () => {
    // Given
    const todos = [{
      id: '1234567890',
      description: 'Do it!'
    }, {
      id: '0987654321',
      description: 'Do it again!'
    }] as Todo[];
    comp.todos = todos;

    // When
    fixture.detectChanges();

    // Then
    expect(el.querySelectorAll('app-todo').length).toBe(todos.length);
  });

  it('should throw an error if title is missing', () => {
    // Given
    comp.title = null;

    // When / Then
    expect(() => fixture.detectChanges()).toThrow(new Error('title attribute is mandatory'));
  });

});
