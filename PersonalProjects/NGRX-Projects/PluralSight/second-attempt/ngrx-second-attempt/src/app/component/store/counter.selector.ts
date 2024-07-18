import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter-state";

export const selectCounterState = createFeatureSelector<counterState>('counter');

export const selectCounter = createSelector(
  selectCounterState,
  (state) => state.numCount
);