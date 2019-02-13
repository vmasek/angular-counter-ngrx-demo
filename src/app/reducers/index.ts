import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState } from './counter.reducer';

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
