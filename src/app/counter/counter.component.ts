import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecrementCounter, IncrementCounter, SetCounter } from '../actions/counter.actions';
import { AppState } from '../reducers';
import { selectCount$ } from '../reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$: Observable<number> = this.store.pipe(select(selectCount$));
  value = 0;

  constructor(private store: Store<AppState>) {}

  increment(): void {
    this.store.dispatch(new IncrementCounter());
  }

  decrement(): void {
    this.store.dispatch(new DecrementCounter());
  }

  set(val: number = 0): void {
    this.store.dispatch(new SetCounter(val));
  }

  reset(): void {
    this.set(this.value = 0);
  }
}
