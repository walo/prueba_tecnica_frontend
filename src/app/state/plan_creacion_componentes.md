# Plan para la Creación de Componentes UI siguiendo Atomic Design con NgRx

Este documento describe el plan para crear componentes UI en el proyecto Angular aplicando los principios SOLID, Clean Architecture y Atomic Design, con integración al manejo de estado global mediante NgRx.

## Objetivos
- Crear componentes atómicos, moléculas y organismos siguiendo Atomic Design.
- Aplicar principios SOLID para mantener componentes desacoplados y reutilizables.
- Seguir Clean Architecture para separar responsabilidades y facilitar mantenimiento.
- Integrar componentes con NgRx para manejo reactivo del estado.
- Documentar convenciones y estructura para futuros desarrollos.

## Pasos del Plan

1. Definir estructura de carpetas para componentes:
   - src/app/shared/components/atoms/
   - src/app/shared/components/molecules/
   - src/app/shared/components/organisms/

2. Definir convenciones y buenas prácticas:
   - Naming claro y consistente.
   - Separación de presentación y lógica.
   - Uso de Inputs/Outputs para comunicación.
   - Conexión al store NgRx mediante inyección, dispatch y select.

3. Crear componentes atómicos básicos:
   - Botones, inputs, labels, iconos, etc.

4. Crear componentes moléculas:
   - Combinación de átomos para formar unidades funcionales (ej. formulario de búsqueda).

5. Crear componentes organismos:
   - Combinación de moléculas y átomos para secciones completas (ej. header, lista de items).

6. Implementar conexión al store NgRx:
   - Inyección del Store en componentes contenedores.
   - Despacho de acciones y suscripción a selectores.

7. Escribir pruebas unitarias e integración:
   - Para asegurar calidad y evitar regresiones.

## Actualización para creación del componente Dashboard

10. Crear el componente dashboard como componente standalone en `src/app/features/dashboard`.
    - Reutilizar componentes organismos como `app-item-list` para mostrar la lista de elementos.
    - Conectar el componente al store NgRx para obtener datos reactivos.
    - Aplicar principios SOLID y Clean Architecture para mantener el componente desacoplado y mantenible.
    - Usar Angular 20 y componentes standalone para optimizar modularidad y rendimiento.
    - Configurar la ruta protegida 'dashboard' en el archivo de rutas para cargar el componente con guardias de autenticación.
    - Escribir pruebas unitarias e integración para asegurar calidad y evitar regresiones.
    - Documentar la integración y uso del componente en el plan de creación de componentes.
8. Documentar arquitectura y convenciones:
   - Mantener actualizado este documento para referencia futura.

---

Este plan será la guía para la implementación de los componentes UI en el proyecto.
## Actualización: Plan de creación del login con Angular 20, NgRx y signals

Se ha implementado el login con las siguientes características:

- Estructura NgRx para autenticación con acciones, reducer, efectos y selectores.
- AuthService adaptado para autenticación simulada con usuario y contraseña fijos.
- Componente standalone LoginComponent con formulario reactivo y conexión a NgRx.
- AuthGuard mejorado para usar estado NgRx y validar acceso.
- AuthInterceptor mejorado para obtener token desde estado NgRx.
- Persistencia de sesión implementada con efectos NgRx y almacenamiento local.
- Rutas definidas para login y rutas protegidas (ejemplo comentado para dashboard).
- Pruebas unitarias básicas para LoginComponent.
- Documentación del plan actualizada con detalles de implementación.

Este plan permite futura integración con backend real y ampliación de funcionalidades manteniendo buenas prácticas y principios SOLID.