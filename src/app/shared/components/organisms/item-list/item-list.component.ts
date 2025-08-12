import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems } from '../../../../state/store/items.actions';
import { selectItems, selectItemsLoading } from '../../../../state/store/items.selectors';
import { CardComponent } from '../../molecules/card/card.component';
import { ButtonGroupComponent } from '../../molecules/button-group/button-group.component';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  imports: [CardComponent, ButtonGroupComponent, AsyncPipe],
  standalone: true,
  // Eliminar providers para evitar instanciar Store diferente
  // providers: [ Store],
})
export class ItemListComponent {
  items$: Observable<any[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectItems);
    this.loading$ = this.store.select(selectItemsLoading);
    this.store.dispatch(loadItems());
  }
}