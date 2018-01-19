import { Component } from '@angular/core';
import {EntryListComponent} from './entry-list/entry-list.component';
import {SingleEntryComponent} from './single-entry/single-entry.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>App works bliss</h1>
    <app-entry-list></app-entry-list>
    <app-single-entry></app-single-entry>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
