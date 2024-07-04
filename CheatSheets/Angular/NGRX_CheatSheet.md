# NgRx Cheat Sheet

NgRx is a state management library for Angular applications, inspired by Redux. It provides a predictable state container for your application and simplifies the development of complex applications.

## Core Concepts

- **Store:** A central container for your application's state.
- **Actions:** Events that describe changes to the state.
- **Reducers:** Pure functions that take the current state and an action and return a new state.
- **Selectors:** Functions that select a slice of state from the store.
Effects: Handle side effects, such as asynchronous operations.

## Building Blocks

## Actions

// Action interface (required)  
export interface Action {  
  type: string; // Unique action type  
  payload?: any; // Optional data associated with the action  
}  

// Action creator (recommended)  
export const increment = createAction('[Counter] Increment');  
export const decrement = createAction('[Counter] Decrement');  

## Reducers

// Reducer function (required)  
export const counterReducer = createReducer(  
  0, // Initial state  
  on(increment, (state) => state + 1),  
  on(decrement, (state) => state - 1)  
);

## Selectors

// Selector function (recommended)  
export const selectCount = createSelector(  
  selectFeature,  
  (state) => state.count  
);  

## Effects

// Effect class (optional)  
@Injectable()  
export class CounterEffects {  
  loadCount$ = createEffect(() =>  
    this.actions$.pipe(  
      ofType(loadCount),  
      mergeMap(() => this.counterService.getCount().pipe(  
        map(count => loadCountSuccess({ count })),  
        catchError(error => of(loadCountFailure({ error })))  
      ))  
    )  
  );  
  
  constructor(private actions$: Actions, private counterService:   CounterService) {}  
}

## Store Setup

// App module  
StoreModule.forRoot({ counter: counterReducer }),  
EffectsModule.forRoot([CounterEffects]),  

## Usage in Components

// Component class  
export class MyComponent {  
  count$ = this.store.select(selectCount); // Select state slice  
  
  constructor(private store: Store) {}  
  
  increment() {  
    this.store.dispatch(increment()); // Dispatch actions  
  }  
  
  decrement() {  
    this.store.dispatch(decrement());  
  }  
}  

## Additional Features

Entity: A helper for managing collections of entities.  
Store Devtools: A browser extension for debugging NgRx applications.  
Router Store: Integrate NgRx with Angular's router.  
Effects Metadata: Declaratively define effects.  