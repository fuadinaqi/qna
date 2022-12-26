import { Action } from '@ngrx/store'

export const LOGIN = 'LOGIN'
export const ADD_POINT = 'ADD_POINT'
export const RESET = 'RESET'

export type AppData = {
  name: string
  points: number
}

export class Login implements Action {
  readonly type: string = LOGIN
  constructor(public payload?: AppData) {}
}

export class AddPoint implements Action {
  readonly type: string = ADD_POINT
  constructor(public payload?: number) {}
}

export class Reset implements Action {
  readonly type: string = RESET
}
