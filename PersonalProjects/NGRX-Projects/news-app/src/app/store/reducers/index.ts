import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { NewsArticle } from '../../models/Article.model';
import { newsReducer } from './news.reducer';
import { AppState } from '../../models/app.state';


export interface NewsState {
  articles?: NewsArticle[];
  isLoading?: boolean;
  error?: string | null;
}

export const reducers: ActionReducerMap<AppState> = {
  news: newsReducer
};


export const metaReducers: MetaReducer<NewsState>[] = isDevMode() ? [] : [];
