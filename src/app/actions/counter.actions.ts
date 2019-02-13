import { Action } from '@ngrx/store';

export class IncrementCounter implements Action {
  static readonly type = '[Counter] Increment';
  readonly type = IncrementCounter.type;
}

export class DecrementCounter implements Action {
  static readonly type = '[Counter] Decrement';
  readonly type = DecrementCounter.type;
}

export class SetCounter implements Action {
  static readonly type = '[Counter] Set value';
  readonly type = SetCounter.type;

  constructor(public value: number = 0) {}
}

export type CounterActions =
  | IncrementCounter
  | DecrementCounter
  | SetCounter
  ;
