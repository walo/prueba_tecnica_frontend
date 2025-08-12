# Componentes UI - Estructura Atomic Design

Actualmente no existen carpetas ni componentes en esta ruta. Se propone la siguiente estructura para organizar los componentes UI siguiendo Atomic Design:

```
src/app/shared/components/
├── atoms/
│   ├── button/
│   ├── input/
│   ├── label/
│   └── ...
├── molecules/
│   ├── search-form/
│   ├── card/
│   └── ...
├── organisms/
│   ├── header/
│   ├── item-list/
│   └── ...
```

- Cada carpeta contendrá componentes standalone Angular organizados por nivel atómico.
- Los componentes atómicos serán los elementos más básicos (botones, inputs, labels).
- Las moléculas combinarán átomos para formar unidades funcionales.
- Los organismos combinarán moléculas y átomos para formar secciones completas.
- Esta estructura facilita escalabilidad, reutilización y mantenimiento.

Este README servirá como guía para la creación y organización de componentes UI en el proyecto.