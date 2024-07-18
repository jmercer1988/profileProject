import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';


export const initialState = {
  numCount: 0
};

export const _counterReducer = createReducer(initialState,
  on(increment, state => ({ numCount: state.numCount + 1})),
  on(decrement, state => ({ numCount: state.numCount - 1})),
  on(reset, state => ({ numCount: 0 })),
);