import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { addTodo, updateTodo } from "./todo.actions";

export const intialState: Todo[] = [];

export const todoReducer = createReducer(
     intialState,
     on(addTodo, (state, {todo}) => [...state, todo]),
     on(updateTodo, (state, {todo}) => state.map(t => t.id === todo.id ? {...t, ...todo}: t))
)