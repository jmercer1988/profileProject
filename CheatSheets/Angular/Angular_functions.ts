/* 
TWO WAY DATA BINDING

 Two-way data binding is a core Angular feature that synchronizes data between a component's class and its template.
 This is typically achieved using the `[(ngModel)]` directive.

::HTML Example::

<input [(ngModel)]="name">
<p>Hello, {{name}}!</p>

*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="name">
    <p>Hello, {{name}}!</p>
  `
})
export class AppComponent {
  name = 'Angular'; 
}


/* 
Creating Custom Pipes for Data Transformation

 Custom pipes allow you to format or transform data directly in your templates.
 This is a powerful way to keep your templates clean and reusable.

::HTML Example::

<p>Original: {{ someText }}</p>
<p>Capitalized: {{ someText | capitalize }}</p>
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}


/* 
 Observables are a powerful way to handle asynchronous operations like HTTP requests in Angular.
 They provide a reactive approach to managing data streams and events.


 ::HTML Example::

 <div *ngIf="data">
  <p>Data loaded successfully:</p>
  <pre>{{ data | json }}</pre>  
</div>
<div *ngIf="!data">Loading data...</div>
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ ... })
export class MyComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.example.com/data').subscribe(
      (response) => (this.data = response),
      (error) => console.error(error)
    );
  }
}

/* 
 Input and output properties facilitate communication between parent and child components.
 Inputs pass data down from parent to child, while outputs emit events from child to parent.


::HTML Example::
<app-child [message]="parentMessage" (messageEvent)="receiveMessage($event)"></app-child>

<p>{{ message }}</p>
<button (click)="sendMessage()">Send Message</button>
*/


// Parent component (app.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child [message]="parentMessage" (messageEvent)="receiveMessage($event)"></app-child>
  `
})
export class AppComponent {
  parentMessage = "Hello from parent";
  receiveMessage(msg: string) {
    console.log(msg); 
  }
}

// Child component (child.component.ts)
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>{{message}}</p>
    <button (click)="sendMessage()">Send Message</button>
  `
})
export class ChildComponent {
  @Input() message: string;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }
}

/* 
 Reactive forms provide a scalable and robust way to build complex forms with validation in Angular.
 They offer fine-grained control over form fields and their validation rules.

 ::HTML Example::
 <form [formGroup]="myForm">
  <input formControlName="name" placeholder="Name">
  <div *ngIf="myForm.get('name').invalid && myForm.get('name').touched">Name is required</div>

  <input formControlName="email" placeholder="Email">
  <div *ngIf="myForm.get('email').invalid && myForm.get('email').touched">
    <div *ngIf="myForm.get('email').errors.required">Email is required</div>
    <div *ngIf="myForm.get('email').errors.email">Invalid email format</div>
  </div>

  <button type="submit" [disabled]="!myForm.valid">Submit</button>
</form>

*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ ... })
export class MyComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
