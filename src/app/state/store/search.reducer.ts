import { createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';

export interface SearchState {
  query: string;
  results: any[];
  loading: boolean;
  error: any;
}

export const initialState: SearchState = {
  query: '',
  results: [],
  loading: false,
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchItems, (state, { query }) => ({
    ...state,
    query,
    loading: true,
    error: null,
  })),
  on(SearchActions.searchItemsSuccess, (state, { results }) => ({
    ...state,
    results,
    loading: false,
  })),
  on(SearchActions.searchItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);