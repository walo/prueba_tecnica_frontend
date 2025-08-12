# Sistema de Gestión de Pruebas y Evaluaciones

## Introducción

Este proyecto es un sistema web básico para la gestión de pruebas y evaluaciones, diseñado para facilitar la administración y realización de pruebas en un entorno educativo. El sistema cuenta con autenticación de usuarios y manejo de roles diferenciados: administrador y estudiante.

### Tecnologías utilizadas

- Backend: Node.js
- Frontend: Angular versión 20
- Autenticación: JWT (JSON Web Tokens) y sesiones

## Sistema de Autenticación

El sistema de autenticación está diseñado para garantizar la seguridad y el control de acceso mediante:

- Registro de usuarios con asignación de rol (administrador o estudiante).
- Inicio de sesión con validación de credenciales.
- Generación de tokens JWT para mantener sesiones seguras.
- Middleware para proteger rutas y asegurar que solo usuarios autenticados puedan acceder.
- Autorización basada en roles para controlar el acceso a funcionalidades específicas según el tipo de usuario.

## Funcionalidades Principales

### Administrador

- Crear, editar y eliminar usuarios.
- Crear, editar y eliminar pruebas.
- Añadir preguntas a cada prueba.
- Consultar resultados de estudiantes.

### Estudiante

- Iniciar sesión.
- Consultar pruebas disponibles.
- Resolver pruebas.
- Ver puntajes obtenidos.

## Estructura General del Proyecto

- **Backend (Node.js):** Maneja la lógica del servidor, autenticación, autorización, gestión de usuarios, pruebas y resultados.
- **Frontend (Angular 20):** Interfaz de usuario para administradores y estudiantes, con componentes para gestión de pruebas, resolución y visualización de resultados.
- **Autenticación:** Implementada con JWT para sesiones seguras y middleware para protección de rutas y autorización por roles.

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio.
2. Instalar dependencias en backend y frontend:
   - Backend: `npm install`
   - Frontend: `npm install`
3. Configurar variables de entorno necesarias (por ejemplo, secret JWT).
4. Ejecutar el backend:
   ```
   npm start
   ```
5. Ejecutar el frontend:
   ```
   ng serve
   ```
6. Acceder a la aplicación desde el navegador en la URL indicada (por defecto `http://localhost:4200`).

---

Esta documentación proporciona una visión general del sistema y sus funcionalidades principales para facilitar su uso y mantenimiento.
