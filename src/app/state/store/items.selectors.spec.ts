import { selectItems, selectItemsLoading, selectItemsState, ItemsState } from './items.selectors';

describe('Items Selectors', () => {
  const initialState: ItemsState = {
    items: [{ id: 1, name: 'Test Item' }],
    loading: true,
    error: null,
  };

  it('should select the items state', () => {
    const result = selectItemsState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select items', () => {
    const result = selectItems.projector(initialState);
    expect(result).toEqual(initialState.items);
  });

  it('should select loading', () => {
    const result = selectItemsLoading.projector(initialState);
    expect(result).toBe(true);
  });
});