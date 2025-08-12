import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ItemsState {
  items: any[];
  loading: boolean;
  error: any;
}

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectItems = createSelector(
  selectItemsState,
  (state) => state.items
);

export const selectItemsLoading = createSelector(
  selectItemsState,
  (state) => state.loading
);

export const selectItemsError = createSelector(
  selectItemsState,
  (state) => state.error
);