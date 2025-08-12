# Convenciones y Buenas Prácticas para el Manejo de Estado con NgRx

Para mantener un código limpio, escalable y mantenible en el manejo de estado con NgRx, se recomienda seguir las siguientes convenciones y buenas prácticas:

## Nomenclatura
- Nombrar las acciones con el formato `[Feature] Acción Descriptiva`, por ejemplo: `[User] Load Users`.
- Nombrar los archivos con el patrón `[feature].actions.ts`, `[feature].reducer.ts`, etc.

## Reducers
- Mantener los reducers puros, sin efectos secundarios.
- Actualizar el estado de forma inmutable.
- Usar funciones auxiliares para manejar casos complejos.

## Effects
- Usar efectos para manejar llamadas a servicios externos y operaciones asíncronas.
- Despachar nuevas acciones para reflejar resultados o errores.
- Manejar errores adecuadamente dentro de los efectos.

## Selectors
- Crear selectores para acceder a partes específicas del estado.
- Usar `createSelector` para optimizar el rendimiento.
- Evitar lógica compleja dentro de los selectores.

## General
- Documentar cada acción, reducer, efecto y selector para facilitar el mantenimiento.
- Mantener la estructura modular y organizada.
- Escribir pruebas unitarias para reducers y efectos.
- Evitar lógica de negocio en los reducers; esta debe estar en servicios o efectos.

Seguir estas prácticas asegura un manejo de estado robusto y fácil de mantener en el proyecto.