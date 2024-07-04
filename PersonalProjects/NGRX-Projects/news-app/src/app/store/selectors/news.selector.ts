import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app.state';
import { NewsState } from '../../models/news.state';

export const selectNewsState = (state: AppState) => state.news;

export const selectNews = createSelector(
  selectNewsState,
  (newsState: NewsState) => newsState.news
);
