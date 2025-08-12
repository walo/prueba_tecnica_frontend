# Documentación de la Propuesta para Manejo de Variables de Entorno y Almacenamiento Seguro en Sesión

## 1. Archivo .env para Variables Sensibles

- Se crea un archivo `.env` en la raíz del proyecto para almacenar variables sensibles como llaves de APIs.
- Ejemplo de contenido:
  ```
  API_KEY=abcdef1234567890
  API_URL=https://api.ejemplo.com
  ANALYTICS_KEY=xyz987654321
  ```
- Este archivo **no debe incluirse en el control de versiones**. Se debe agregar a `.gitignore`.
- Mantener nombres claros y consistentes para las variables.
- Documentar las variables necesarias para facilitar la configuración en diferentes entornos.

## 2. Integración del Archivo .env con Angular

- Angular no soporta directamente archivos `.env` en tiempo de ejecución.
- Se propone usar un script que lea el archivo `.env` y genere el archivo `src/environments/environment.ts` con las variables necesarias.
- Ejemplo de script `generate-env.js`:
  ```js
  const fs = require('fs');
  const dotenv = require('dotenv');

  const envConfig = dotenv.parse(fs.readFileSync('.env'));

  const envFileContent = \`
  export const environment = {
    production: false,
    apiKey: '\${envConfig.API_KEY}',
    apiUrl: '\${envConfig.API_URL}',
    analyticsKey: '\${envConfig.ANALYTICS_KEY}'
  };
  \`;

  fs.writeFileSync('src/environments/environment.ts', envFileContent);
  ```
- Este script se ejecuta antes de compilar Angular (por ejemplo, en un script npm prebuild).
- En Angular se importa `environment` para acceder a las variables:
  ```typescript
  import { environment } from '../environments/environment';

  console.log(environment.apiKey);
  ```

## 3. Servicio SessionStorageService con Cifrado

- Se crea un servicio inyectable `SessionStorageService` para manejar el almacenamiento en `sessionStorage`.
- El servicio implementa métodos:
  - `setItem(key: string, value: any): void`
  - `getItem(key: string): any`
  - `removeItem(key: string): void`
- Los datos se cifran y descifran usando un servicio de cifrado separado (`EncryptionService`), aplicando cifrado simétrico (por ejemplo, AES).
- La clave de cifrado se maneja de forma segura y puede ser inyectada.
- El servicio se encarga solo del almacenamiento, delegando la lógica de cifrado a otro servicio, respetando el principio de responsabilidad única.

## 4. Aplicación de Principios SOLID

- **Single Responsibility Principle (SRP):** Separar la lógica de cifrado y almacenamiento en servicios distintos.
- **Open/Closed Principle (OCP):** El servicio puede extenderse para soportar otros tipos de almacenamiento sin modificar el código base.
- **Liskov Substitution Principle (LSP):** Interfaces claras para permitir la sustitución de implementaciones.
- **Interface Segregation Principle (ISP):** Interfaces específicas para cada responsabilidad.
- **Dependency Inversion Principle (DIP):** Inyección de dependencias para el servicio de cifrado.

## 5. Mejores Prácticas

- No exponer variables sensibles en el frontend.
- Mantener el archivo `.env` fuera del repositorio.
- Usar cifrado para proteger datos sensibles almacenados en `sessionStorage`.
- Aplicar principios SOLID para mantener el código limpio y mantenible.
- Documentar claramente las variables de entorno y el uso del servicio de almacenamiento seguro.

---

Esta propuesta permite manejar de forma segura las variables sensibles y el almacenamiento en sesión, facilitando la mantenibilidad y escalabilidad del proyecto.