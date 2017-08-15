import { TodoComponent } from './todo.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DndModule } from 'ng2-dnd';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Todo } from '../../models/todo';

describe('TodoComponent', () => {

  let comp:    TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        EllipsisPipe
      ],
      imports: [
        DndModule.forRoot(),
        RouterTestingModule
      ]
    });

    fixture = TestBed.createComponent(TodoComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('article'));
    el = de.nativeElement;
  });

  it('should display todo\'s description', () => {
    // Given
    const todo = {
      id: '1234567890',
      description: 'Do it!'
    } as Todo;
    comp.todo = todo;

    // When
    fixture.detectChanges();

    // Then
    expect(el.textContent).toContain(comp.todo.description);
  });

  it('should display a link to more details', () => {
    // Given
    const todo = {
      id: '1234567890',
      description: 'Do it!'
    } as Todo;
    comp.todo = todo;
    const link = el.querySelector('a');

    // When
    fixture.detectChanges();

    // Then
    expect(link.href).toContain(`/todo/${todo.id}`);
  });

});
