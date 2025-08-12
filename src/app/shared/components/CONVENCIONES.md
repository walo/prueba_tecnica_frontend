# Convenciones y Buenas Prácticas para Componentes UI con Conexión a NgRx

Este documento establece las convenciones para la creación de componentes UI en el proyecto, asegurando consistencia, mantenibilidad y correcta integración con NgRx.

## Naming y Organización
- Los componentes se nombran con PascalCase y el sufijo correspondiente (ej. ButtonComponent, SearchFormComponent).
- Se organizan en carpetas según Atomic Design: atoms, molecules, organisms.
- Cada componente tiene su propia carpeta con archivos: .ts, .html, .scss, .spec.ts.

## Separación de Responsabilidades
- Componentes atómicos y moléculas son presentacionales, reciben datos por Inputs y emiten eventos por Outputs.
- Componentes organismos pueden ser contenedores, inyectan Store para manejar estado.
- La lógica de negocio y manejo de estado se delega a servicios y efectos NgRx.

## Conexión a NgRx
- Inyectar Store en componentes contenedores (organismos).
- Usar selectores para obtener datos reactivos del estado.
- Despachar acciones para modificar estado.
- Evitar lógica compleja en componentes, usar servicios y efectos.

## Comunicación entre Componentes
- Usar Inputs y Outputs para comunicación padre-hijo.
- Evitar acceso directo al Store en componentes atómicos y moléculas.

## Pruebas
- Escribir pruebas unitarias para cada componente.
- Probar interacción con Store mediante mocks.

---

Seguir estas convenciones asegura un código limpio, escalable y fácil de mantener.