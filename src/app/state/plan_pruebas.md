# Plan detallado de pruebas unitarias y de integración

## Pruebas unitarias

### 1. ItemListComponent
- Verificar que los observables `items$` y `loading$` se inicializan correctamente con los selectores del store.
- Verificar que se despacha la acción `loadItems` al crear el componente.
- Usar imports standalone según Angular 20 para importar componentes y pipes.
- Probar renderizado básico (opcional en pruebas unitarias, se puede validar en integración).

### 2. CardComponent
- Verificar que los inputs `title` y `content` se reciben correctamente.
- Probar renderizado básico del contenido.

### 3. ButtonGroupComponent
- Verificar que el input `buttons` se recibe correctamente.
- Verificar que el evento `buttonClick` se emite con el índice correcto al hacer click en un botón.

### 4. Store (items)
- Probar acciones:
  - `loadItems`
  - `loadItemsSuccess`
  - `loadItemsFailure`
- Probar selectores:
  - `selectItems`
  - `selectItemsLoading`
- Probar reducer:
  - Transiciones de estado para cada acción.

## Pruebas de integración

### Interacción completa entre ItemListComponent y store
- Validar que al crear el componente se despacha la acción `loadItems`.
- Validar que el componente recibe el estado actualizado del store y renderiza la lista de items.
- Validar el estado de carga (`loading`) y su reflejo en el componente.

---

Este plan servirá como guía para implementar las pruebas unitarias y de integración solicitadas.