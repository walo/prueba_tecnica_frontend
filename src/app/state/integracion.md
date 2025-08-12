# Integración del Estado Global con Componentes Angular usando NgRx

Para integrar el estado global gestionado con NgRx en los componentes Angular, se deben seguir los siguientes pasos:

## Inyección del Store
- Inyectar el `Store` de NgRx en el constructor del componente o servicio donde se necesite acceder o modificar el estado.
```typescript
constructor(private store: Store<AppState>) {}
```

## Despachar Acciones
- Para modificar el estado, despachar acciones usando el método `dispatch` del store.
```typescript
this.store.dispatch(loadItems());
```

## Seleccionar Datos del Estado
- Suscribirse a selectores para obtener datos reactivos del estado.
- Usar el método `select` del store con los selectores definidos.
```typescript
this.items$ = this.store.select(selectItems);
```

## Manejo Reactivo
- Utilizar observables para manejar los datos del estado de forma reactiva.
- Usar el pipe `async` en las plantillas para suscribirse automáticamente.
```html
<ul>
  <li *ngFor="let item of items$ | async">{{ item.name }}</li>
</ul>
```

## Buenas Prácticas
- Mantener la lógica de negocio fuera de los componentes, delegándola a efectos o servicios.
- Despachar acciones para cualquier cambio de estado.
- Usar selectores para evitar acceder directamente al estado.

Esta integración asegura que los componentes estén desacoplados del manejo interno del estado, facilitando la escalabilidad y mantenibilidad de la aplicación.