import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { createAction } from '@ngrx/store';

export const testAction = createAction('[Test] Test Action');

@Injectable({ providedIn: 'root' })
export class TestEffects {
  constructor(private actions$: Actions) {}

  test$ = createEffect(() =>
    this.actions$.pipe(
      ofType(testAction),
      tap(() => {
        console.log('Test action triggered');
      })
    ),
  { dispatch: false });
}