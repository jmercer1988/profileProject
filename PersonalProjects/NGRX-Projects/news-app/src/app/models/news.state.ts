import { NewsArticle } from './Article.model';

export interface NewsState {
    news: NewsArticle[];
    error: any;
    loading: boolean;
  }