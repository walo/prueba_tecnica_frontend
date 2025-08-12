# Documentación para el Manejo de Estado Global con NgRx

## Introducción y Objetivo
En este proyecto, el manejo de estado global se realizará utilizando la librería NgRx, que es una implementación de Redux para Angular. NgRx permite gestionar el estado de la aplicación de forma predecible, centralizada y reactiva, facilitando la escalabilidad y mantenibilidad del código.

El objetivo de esta documentación es especificar qué elementos se deben crear y cómo organizar la carpeta `state` para implementar NgRx correctamente en el proyecto.

## Opciones de Librerías Recomendadas
Para el manejo de estado global en Angular, se recomienda utilizar NgRx debido a su integración nativa con Angular, su ecosistema robusto y su soporte para patrones reactivos.

NgRx se basa en los siguientes conceptos principales:
- **Store**: Contenedor del estado global de la aplicación.
- **Actions**: Eventos que describen cambios en el estado.
- **Reducers**: Funciones puras que determinan cómo cambia el estado en respuesta a las acciones.
- **Effects**: Manejo de efectos secundarios y operaciones asíncronas.
- **Selectors**: Funciones para obtener partes específicas del estado.

Para más detalles, consultar los archivos:
- [Estructura de Carpetas y Archivos](./estructura.md)
- [Elementos a Crear](./elementos.md)
- [Convenciones y Buenas Prácticas](./convencciones.md)
- [Integración con Componentes Angular](./integracion.md)