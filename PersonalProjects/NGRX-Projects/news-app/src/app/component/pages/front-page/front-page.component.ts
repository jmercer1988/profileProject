import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of, startWith } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../models/app.state';
import { NewsArticle } from '../../../models/Article.model';
import { selectNews } from '../../../store/selectors/news.selector';
import { loadNews } from '../../../store/actions/news.actions';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  news$?: Observable<NewsArticle[]> = this.store.select(selectNews).pipe(
    startWith([]),  // Start with an empty array to ensure the array is always defined
    catchError(err => of([]))  // In case of an error, return an empty array
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadNews());
  }
}