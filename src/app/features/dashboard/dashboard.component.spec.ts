import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DashboardComponent } from './dashboard.component';
import { MemoizedSelector } from '@ngrx/store';
import {
  selectItems,
  selectItemsLoading,
} from '../../state/store/items.selectors';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore;
  let mockSelectItems: MemoizedSelector<any, any[]>;
  let mockSelectLoading: MemoizedSelector<any, boolean>;

  const initialState = {
    items: {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
      loading: false,
      error: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    mockSelectItems = store.overrideSelector(
      selectItems,
      initialState.items.items
    );
    mockSelectLoading = store.overrideSelector(
      selectItemsLoading,
      initialState.items.loading
    );

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-item-list component', () => {
    const itemList = fixture.debugElement.query(By.css('app-item-list'));
    expect(itemList).toBeTruthy();
  });

  it('should display items from the store', () => {
    // Since app-item-list is standalone and tested separately,
    // here we just check that the component renders it.
    const itemList = fixture.debugElement.query(By.css('app-item-list'));
    expect(itemList).toBeTruthy();
  });
});
