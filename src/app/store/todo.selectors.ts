import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const todoSelectF = createFeatureSelector<Todo[]>('todos');

export const selectAllTodos = createSelector(todoSelectF, (state) => state);