import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from '../store/counter.selector';
import { decrement, increment } from '../store/counter.action';
import { counterState } from '../store/counter-state';

@Component({
  selector: 'app-primary-page-landing-page',
  templateUrl: './primary-page-landing-page.component.html',
  styleUrls: ['./primary-page-landing-page.component.scss']
})
export class PrimaryPageLandingPageComponent {
  count$ = this.store.select(selectCounter);

  constructor(private store: Store) {}

  decrement() {
    this.store.dispatch(decrement());
  }

  increment() {
    this.store.dispatch(increment());
  }
}