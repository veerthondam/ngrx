import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { addTodo, updateTodo } from '../store/todo.actions';
import { Observable } from 'rxjs';
import { selectAllTodos } from '../store/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  constructor(private store: Store){}

  todo$!: Observable<Todo[]>;

  ngOnInit(): void {
   this.todo$ =  this.store.select(selectAllTodos)
  }
  onSubmit(title: string){
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false
    }

    this.store.dispatch(addTodo({todo: newTodo}))

  }
  updateStatus(todo: Todo){
    this.store.dispatch(updateTodo({todo}, ))
  }

}
