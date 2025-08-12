import { provideZonelessChangeDetection } from '@angular/core';
import * as ItemsActions from './items.actions';
import { TestBed } from '@angular/core/testing';

describe('Items Actions', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
        providers: [
            provideZonelessChangeDetection(),
        ],
        }).compileComponents();
    });

  it('should create loadItems action', () => {
    const action = ItemsActions.loadItems();
    expect(action.type).toBe('[Items] Load Items');
  });

  it('should create loadItemsSuccess action with items', () => {
    const items = [{ id: 1, name: 'Test' }];
    const action = ItemsActions.loadItemsSuccess({ items });
    expect(action.type).toBe('[Items] Load Items Success');
    expect(action.items).toEqual(items);
  });

  it('should create loadItemsFailure action with error', () => {
    const error = 'Error message';
    const action = ItemsActions.loadItemsFailure({ error });
    expect(action.type).toBe('[Items] Load Items Failure');
    expect(action.error).toBe(error);
  });
});
