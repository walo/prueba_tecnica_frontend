import { createAction, props } from '@ngrx/store';

export const searchItems = createAction(
  '[Search] Search Items',
  props<{ query: string }>()
);

export const searchItemsSuccess = createAction(
  '[Search] Search Items Success',
  props<{ results: any[] }>()
);

export const searchItemsFailure = createAction(
  '[Search] Search Items Failure',
  props<{ error: any }>()
);