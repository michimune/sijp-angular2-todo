import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: string;
  todos: Todo[];

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  ngOnInit() {
  }

  addItem(event) {
    var newItem = new Todo();
    newItem.item = this.newTodo;
    newItem.completed = false;
    this.todos.push(newItem);

    event.preventDefault();
  }

  deleteSelected() {
    for(var i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }
}
