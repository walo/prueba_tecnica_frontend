import { searchReducer, initialState } from './search.reducer';
import * as SearchActions from './search.actions';

describe('Search Reducer', () => {
  it('should return the initial state', () => {
    const state = searchReducer(undefined, { type: 'unknown' } as any);
    expect(state).toEqual(initialState);
  });

  it('should set loading to true and update query on searchItems', () => {
    const query = 'test';
    const action = SearchActions.searchItems({ query });
    const state = searchReducer(initialState, action);
    expect(state.loading).toBeTrue();
    expect(state.query).toBe(query);
    expect(state.error).toBeNull();
  });

  it('should update results and set loading to false on searchItemsSuccess', () => {
    const results = [{ id: 1, name: 'Result' }];
    const action = SearchActions.searchItemsSuccess({ results });
    const state = searchReducer(initialState, action);
    expect(state.results).toEqual(results);
    expect(state.loading).toBeFalse();
  });

  it('should set error and loading to false on searchItemsFailure', () => {
    const error = 'Error message';
    const action = SearchActions.searchItemsFailure({ error });
    const state = searchReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBeFalse();
  });
});