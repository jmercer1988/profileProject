# Angular Cheat Sheet
By Joey Mercer

## CLI Commands

- ng new my-app       // Create a new Angular project
- ng generate component my-component // Generate a new component
- ng serve             // Start the development server
- ng build             // Build the application for production

## HTML Angular-Specific Syntax

`<h1>`{{title}}`</h1>`              // Interpolation (displaying data)  
`<div *ngIf="showContent"></div>` // Structural directive (*ngIf)  
`<button (click)="onClick()"></button>` // Event binding  

## Angular Modules

**Examples**

@NgModule({  
  declarations: [AppComponent], 
  imports: [BrowserModule], 
  providers: [], 
  bootstrap: [AppComponent] 
})  
export class AppModule { }  

## RxJS (Reactive Extensions for JavaScript - handling asynchronous operations)

import { Observable } from 'rxjs'; // Import the Observable class  
  
// Example of using an Observable  
const observable = new Observable(subscriber => {  
  subscriber.next(1); // Emit a value  
  subscriber.complete(); // Signal completion  
});

## Pipes (Transforming data for display)

@Pipe({name: 'myPipe'})  
export class MyPipe implements PipeTransform {  
  transform(value: any, ...args: any[]): any {  
    // Transformation logic  
  }  
}  


# Routing

import { RouterModule, Routes } from '@angular/router';  
  
const appRoutes: Routes = [  
  { path: 'home', component: HomeComponent },  
  { path: 'about', component: AboutComponent },  
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // Redirect to `home`  
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a   404 page  
];  

@NgModule({  
  imports: [RouterModule.forRoot(appRoutes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  

**Structural Directives (Change the DOM layout)**

*ngIf="condition": Conditionally adds or removes elements from the DOM based on the condition.  
*ngFor="let item of items": Iterates over a collection (items) and creates a template for each item.  
*ngSwitch: A set of directives (*ngSwitchCase, *ngSwitchDefault) for conditional rendering based on the value of an expression.  

**Attribute Directives (Change the appearance or behavior of elements)**

ngClass: Dynamically adds or removes CSS classes based on conditions.  
ngStyle: Dynamically sets inline styles on an element.  
ngModel: Two-way binding for form input elements.  

**Event Binding**

(event)="expression": Listens for an event (e.g., click, submit) and executes the expression when the event occurs.

**Property Binding**

[property]="expression": Binds a property of an element to the result of an expression.

**Interpolation**

{{expression}}: Displays the result of an expression directly in the template.
Template Reference Varia

