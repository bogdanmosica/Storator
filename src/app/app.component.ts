import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import * as fromStore from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'loadingAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms', style({ opacity: 1 })),
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('300ms', style({ opacity: 0 })),
        ]),
      ]
    ),
  ],
})
export class AppComponent {
  private showIsLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.CoreState>) {
  }

  ngOnInit() {
    this.showIsLoading$ = this.store.pipe(select(fromStore.getIsLoading));
  }
}
