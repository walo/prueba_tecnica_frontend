import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ItemListComponent } from './item-list.component';
import { loadItems } from '../../../../state/store/items.actions';
import { MemoizedSelector } from '@ngrx/store';
import { selectItems, selectItemsLoading } from '../../../../state/store/items.selectors';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ItemListComponent Integration', () => {
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
    fixture.detectChanges();
  });

  it('should dispatch loadItems on creation', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(loadItems());
  });

  it('should render list of items', () => {
    const testItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    mockSelectItems.setResult(testItems);
    store.refreshState();
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-card'));
    expect(cards.length).toBe(testItems.length);
  });

  it('should show loading state', () => {
    mockSelectLoading.setResult(true);
    store.refreshState();
    fixture.detectChanges();

    const loadingElement = fixture.debugElement.query(By.css('.loading'));
    expect(loadingElement).toBeTruthy();
  });
});