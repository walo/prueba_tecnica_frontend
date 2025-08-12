import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Items] Load Items');

export const loadItemsSuccess = createAction(
  '[Items] Load Items Success',
  props<{ items: any[] }>()
);

export const loadItemsFailure = createAction(
  '[Items] Load Items Failure',
  props<{ error: any }>()
);