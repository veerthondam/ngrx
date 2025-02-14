import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const addTodo = createAction('[Todo] Add Todo', props<{todo: Todo}>());
export const updateTodo = createAction('[Todo] Update Todo', props<{todo: Todo}>());
