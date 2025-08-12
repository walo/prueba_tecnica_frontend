import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ItemListComponent } from './item-list.component';
import { loadItems } from '../../../../state/store/items.actions';
import { MemoizedSelector } from '@ngrx/store';
import { selectItems, selectItemsLoading } from '../../../../state/store/items.selectors';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let store: MockStore;
  let mockSelectItems: MemoizedSelector<any, any[]>;
  let mockSelectLoading: MemoizedSelector<any, boolean>;

  const initialState = {
    items: [],
    loading: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    mockSelectItems = store.overrideSelector(selectItems, []);
    mockSelectLoading = store.overrideSelector(selectItemsLoading, false);

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component and dispatch loadItems', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(dispatchSpy).toHaveBeenCalledWith(loadItems());
  });

  it('should have items$ observable with items from store', (done) => {
    const testItems = [{ id: 1, name: 'Test Item' }];
    mockSelectItems.setResult(testItems);
    store.refreshState();
    component.items$.subscribe(items => {
      expect(items).toEqual(testItems);
      done();
    });
  });

  it('should have loading$ observable with loading state from store', (done) => {
    mockSelectLoading.setResult(true);
    store.refreshState();
    component.loading$.subscribe(loading => {
      expect(loading).toBeTrue();
      done();
    });
  });
});