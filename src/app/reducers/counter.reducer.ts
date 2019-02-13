import { CounterActions, DecrementCounter, IncrementCounter, SetCounter } from '../actions/counter.actions';
import { AppState } from './index';

export interface CounterState {
  count: number;
}

export const counterInitialState: CounterState = {
  count: 0,
};

export function counterReducer(state = counterInitialState, action: CounterActions): CounterState {
  switch (action.type) {
    case IncrementCounter.type:
      return {count: state.count + 1};

    case DecrementCounter.type:
      return {count: state.count - 1};

    case SetCounter.type:
      return {count: (action as SetCounter).value || 0};

    default:
      return state;
  }
}

export const selectCount$ = (state: AppState) => state.counter.count;
