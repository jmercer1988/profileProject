import { createReducer, on } from '@ngrx/store';
import { loadNews, loadNewsSuccess, loadNewsFailure } from '../actions/news.actions';
import { NewsState } from '../../models/news.state';

export const initialState: NewsState = {
    news: [],
    error: null,
    loading: false
  };
  
  export const newsReducer = createReducer(
    initialState,
    on(loadNews, state => ({ ...state, loading: true, error: null })),
    on(loadNewsSuccess, (state, { news }) => ({ ...state, news, loading: false })),
    on(loadNewsFailure, (state, { error }) => ({ ...state, loading: false, error }))
  );