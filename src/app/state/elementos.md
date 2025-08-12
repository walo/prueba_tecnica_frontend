# Elementos a Crear para el Manejo de Estado con NgRx

Para cada característica o módulo en la aplicación, se deben crear los siguientes elementos para implementar el manejo de estado con NgRx:

## Actions
- Definir las acciones que describen los eventos que pueden cambiar el estado.
- Utilizar `createAction` y `props` para definir tipos y payloads.
- Nombrar las acciones con el formato `[Feature] Acción Descriptiva`.

## Reducers
- Implementar la lógica para actualizar el estado según las acciones recibidas.
- Usar `createReducer` y `on` para manejar las acciones.
- Mantener los reducers puros y sin efectos secundarios.
- Actualizar el estado de forma inmutable.

## Effects
- Gestionar operaciones asíncronas y efectos secundarios.
- Definir efectos para llamadas a APIs, tareas asíncronas y despachar nuevas acciones.
- Usar `createEffect` para definir efectos.

## Selectors
- Crear funciones para seleccionar datos específicos del estado.
- Utilizar `createSelector` para optimizar el acceso al estado.
- Facilitar la suscripción reactiva a datos del estado desde los componentes.

Esta organización permite un manejo claro, escalable y mantenible del estado global en la aplicación.