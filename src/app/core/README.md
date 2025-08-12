# Uso de core.providers en el componente raíz

Para que los providers definidos en el módulo core estén disponibles globalmente en la aplicación, se debe importar el arreglo `coreProviders` en el componente raíz.

Ejemplo en `src/app/app.ts`:

```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { coreProviders } from './core/core.providers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [...coreProviders],
})
export class App {
  protected readonly title = signal('prueba_tecnica');
}
```

De esta forma, todos los servicios, guards, interceptors y utilidades definidos en core estarán disponibles para toda la aplicación.

---

## Escalabilidad

- Para agregar nuevas funcionalidades core, crear nuevos providers standalone en las carpetas correspondientes (`guards`, `interceptors`, `services`, `utils`).
- Actualizar los archivos `index.ts` y `core.providers.ts` para incluir los nuevos providers.
- Mantener la estructura modular y clara para facilitar mantenimiento y extensibilidad.

Esta arquitectura permite mantener el proyecto organizado, escalable y compatible con Angular Standalone Components y Feature Modules.