# Estructura de Carpetas y Archivos para NgRx en src/app/state

Para organizar el manejo de estado global con NgRx, se recomienda la siguiente estructura de carpetas y archivos dentro de `src/app/state`:

```
src/app/state/
├── actions/
│   └── [feature].actions.ts
├── reducers/
│   └── [feature].reducer.ts
├── effects/
│   └── [feature].effects.ts
├── selectors/
│   └── [feature].selectors.ts
└── index.ts
```

- **actions/**: Contiene las definiciones de las acciones para cada característica o módulo.
- **reducers/**: Contiene los reducers que actualizan el estado en respuesta a las acciones.
- **effects/**: Contiene los efectos para manejar operaciones asíncronas y efectos secundarios.
- **selectors/**: Contiene los selectores para obtener datos específicos del estado.
- **index.ts**: Archivo que exporta los elementos principales para facilitar las importaciones.

Esta estructura modular facilita la escalabilidad y el mantenimiento del estado global en la aplicación.