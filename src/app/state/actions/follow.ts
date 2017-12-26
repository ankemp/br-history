import { Action } from '@ngrx/store';

export const LOAD = '[Follow] LOAD';
export const LOAD_SUCCESS = '[Follow] LOAD SUCCESS';

export const ADD = '[Follow] ADD';
export const ADD_SUCCESS = '[Follow] ADD SUCCESS';

export const REMOVE = '[Follow] REMOVE';
export const REMOVE_SUCCESS = '[Follow] REMOVE SUCCESS';

export class Load implements Action {
  readonly type = LOAD;
  constructor(public payload = null) { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: any[]) { }
}

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: string) { }
}

export class AddSuccess implements Action {
  readonly type = ADD_SUCCESS;
  constructor(public payload: any[]) { }
}

export class Remove implements Action {
  readonly type = REMOVE;
  constructor(public payload: string) { }
}

export class RemoveSuccess implements Action {
  readonly type = REMOVE_SUCCESS;
  constructor(public payload: string) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | Add
  | AddSuccess
  | Remove
  | RemoveSuccess
  ;
