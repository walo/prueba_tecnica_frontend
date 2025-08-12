# Arquitectura propuesta para Core en proyecto Angular Standalone con Feature Modules

## Contexto
El proyecto está configurado con Angular Standalone Components, sin NgModules tradicionales. Por ello, la arquitectura de Feature Modules debe adaptarse para organizar funcionalidades core (servicios, guards, interceptors, utilidades) como providers standalone.

## Objetivos
- Organizar la carpeta `core` para que sea escalable y fácil de mantener.
- Facilitar la importación y uso global de servicios y funcionalidades core.
- Permitir agregar nuevas funcionalidades core sin afectar la estructura base.
- Mantener la independencia y reutilización de cada provider.

## Estructura propuesta

```
src/app/core/
├── guards/
│   ├── auth.guard.ts
│   ├── ...
│   └── index.ts
├── interceptors/
│   ├── auth.interceptor.ts
│   ├── ...
│   └── index.ts
├── services/
│   ├── auth.service.ts
│   ├── ...
│   └── index.ts
├── utils/
│   ├── logger.ts
│   ├── ...
│   └── index.ts
└── core.providers.ts
```

### Descripción

- Cada carpeta (`guards`, `interceptors`, `services`, `utils`) contiene providers standalone específicos.
- Cada carpeta tiene un archivo `index.ts` que exporta agrupadamente todos los providers de esa carpeta.
- El archivo `core.providers.ts` importa y agrupa todos los providers core para facilitar su importación en el componente raíz o en otros componentes feature.

## Implementación

### Providers standalone

Cada servicio, guard o interceptor se implementa como provider standalone, por ejemplo:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // implementación
}
```

### Archivos index.ts

Ejemplo para `services/index.ts`:

```typescript
export * from './auth.service';
// exportar otros servicios
```

### Archivo core.providers.ts

Agrupa todos los providers core:

```typescript
import { importProvidersFrom } from '@angular/core';
import * as guards from './guards';
import * as interceptors from './interceptors';
import * as services from './services';
import * as utils from './utils';

export const coreProviders = [
  ...Object.values(guards),
  ...Object.values(interceptors),
  ...Object.values(services),
  ...Object.values(utils),
];
```

## Uso

En el componente raíz (`src/app/app.ts`), importar `coreProviders` para que estén disponibles globalmente:

```typescript
@Component({
  ...
  providers: [...coreProviders],
})
export class App { }
```

## Escalabilidad

- Para agregar nuevas funcionalidades core, crear nuevos providers standalone en la carpeta correspondiente.
- Actualizar el archivo `index.ts` y `core.providers.ts` para incluir los nuevos providers.
- Mantener la estructura modular y clara para facilitar mantenimiento y extensibilidad.

---

Esta arquitectura permite mantener el proyecto organizado, escalable y compatible con Angular Standalone Components y Feature Modules.
