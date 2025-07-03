# 📋 Estándares de Código para Componentes

## 🎯 Principios Generales

1. **TypeScript First**: Todos los componentes deben estar fuertemente tipados
2. **Composición sobre Herencia**: Usar composición de componentes y hooks personalizados
3. **Responsabilidad Única**: Cada componente debe tener una sola responsabilidad clara
4. **Inmutabilidad**: Evitar mutaciones directas del estado

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── ui/               # Componentes base reutilizables (shadcn/ui)
│   ├── providers/        # Context providers
│   └── [feature]/        # Componentes específicos de features
├── hooks/                # Custom hooks
└── lib/
    └── stores/          # Zustand stores
```

## 🔧 Mejores Prácticas

### 1. **Componentes**

```typescript
// ✅ BIEN: Props bien tipadas y valores por defecto
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export function Component({ 
  title, 
  description = "Descripción por defecto",
  onAction 
}: ComponentProps) {
  // ...
}

// ❌ MAL: Props sin tipos o con any
export function Component({ title, description }: any) {
  // ...
}
```

### 2. **Manejo de Estado**

```typescript
// ✅ BIEN: Estado local para UI, Zustand para estado global
const [isOpen, setIsOpen] = useState(false); // UI local

// Global state con Zustand
const { user, setUser } = useUserStore();

// ❌ MAL: Estado global para todo
const { isModalOpen, setIsModalOpen } = useGlobalStore(); // No necesario
```

### 3. **Performance**

```typescript
// ✅ BIEN: Memorización cuando es necesaria
const expensiveValue = useMemo(() => 
  calculateExpensiveValue(data), 
  [data]
);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// ❌ MAL: Memorizar todo sin necesidad
const simpleValue = useMemo(() => data.name, [data.name]); // Innecesario
```

### 4. **Efectos Secundarios**

```typescript
// ✅ BIEN: Cleanup en useEffect
useEffect(() => {
  const timer = setTimeout(() => {
    doSomething();
  }, 1000);

  return () => clearTimeout(timer);
}, [dependency]);

// ❌ MAL: Sin cleanup
useEffect(() => {
  setTimeout(() => doSomething(), 1000); // Memory leak
}, []);
```

### 5. **Accesibilidad**

```typescript
// ✅ BIEN: Atributos ARIA apropiados
<button
  aria-label="Cerrar modal"
  aria-pressed={isActive}
  onClick={handleClose}
>
  <X />
</button>

// ❌ MAL: Sin accesibilidad
<div onClick={handleClose}>X</div>
```

### 6. **Manejo de Errores**

```typescript
// ✅ BIEN: Error boundaries y estados de error
const [error, setError] = useState<Error | null>(null);
const [loading, setLoading] = useState(false);

try {
  await fetchData();
} catch (err) {
  setError(err as Error);
}

// ❌ MAL: Sin manejo de errores
await fetchData(); // Puede fallar silenciosamente
```

## 🎨 Estilos con Tailwind

```typescript
// ✅ BIEN: Usar cn() helper para clases condicionales
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // Props className al final
)} />

// ❌ MAL: Concatenación manual
<div className={`base-classes ${isActive ? 'active-classes' : ''}`} />
```

## 🧪 Testing

Cada componente debe tener tests que cubran:

1. **Renderizado**: El componente se renderiza sin errores
2. **Props**: Comportamiento con diferentes props
3. **Interacciones**: Eventos de usuario funcionan correctamente
4. **Estados**: Cambios de estado se reflejan correctamente
5. **Accesibilidad**: Cumple con estándares WCAG

```typescript
// Ejemplo de test
describe('Button', () => {
  it('should render with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📦 Imports

```typescript
// ✅ BIEN: Orden consistente de imports
import { useState, useEffect } from 'react'; // React primero
import { motion } from 'framer-motion'; // Librerías externas
import { Button } from '@/components/ui/button'; // Componentes internos
import { cn } from '@/lib/utils'; // Utilidades
import type { User } from '@/types'; // Types al final

// ❌ MAL: Imports desordenados
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './button';
```

## 🚀 Checklist de Revisión

Antes de hacer commit, verificar:

- [ ] TypeScript sin errores
- [ ] Props bien documentadas con JSDoc si es necesario
- [ ] Sin console.log() o debuggers
- [ ] Componentes con displayName si usan React.memo o forwardRef
- [ ] Estados de carga y error manejados
- [ ] Memoria limpiada en useEffect
- [ ] Accesibilidad implementada
- [ ] Tests escritos y pasando
- [ ] Sin datos hardcodeados
- [ ] Código formateado con Prettier