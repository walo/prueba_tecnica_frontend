import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoading, selectQuery } from '../../../../state/store/search.selectors';
import { searchItems } from '../../../../state/store/search.actions';
import { SearchFormComponent } from '../../molecules/search-form/search-form.component';
import { ButtonGroupComponent } from '../../molecules/button-group/button-group.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ SearchFormComponent, ButtonGroupComponent ],
  standalone: true,
})
export class HeaderComponent {
  query$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.query$ = this.store.select(selectQuery);
    this.loading$ = this.store.select(selectLoading);
  }

  onSearch(query: string): void {
    this.store.dispatch(searchItems({ query }));
  }
}