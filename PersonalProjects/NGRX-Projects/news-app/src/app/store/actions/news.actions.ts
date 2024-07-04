import { createAction, props } from '@ngrx/store';
import { NewsApiResponse } from '../../models/Article.model';

export const loadNews = createAction('[News Page] Load News');
export const loadNewsSuccess = createAction('[News API] Load News Success', props<{ news: NewsApiResponse[] }>());
export const loadNewsFailure = createAction('[News API] Load News Failure', props<{ error: any }>());
