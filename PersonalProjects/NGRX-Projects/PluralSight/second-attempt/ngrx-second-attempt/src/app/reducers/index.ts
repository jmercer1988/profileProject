import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterState } from '../component/store/counter-state';
import * as _counterReducer from '../component/store/counter.reducer';

export interface State {
    counter: counterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: _counterReducer._counterReducer
}; 


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
