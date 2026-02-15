# Design System - Pomodoro App

> Design System extraído da interface Pomodoro. Todos os tokens são semânticos e baseados na análise visual das telas fornecidas.

---

## 🎨 Cores

### Texto
```css
--text-primary: #1a1a1a;           /* Títulos principais, números do timer */
--text-secondary: #4a4a4a;         /* Textos de tarefas, labels */
--text-muted: #9e9e9e;             /* Subtextos, placeholders, "Pomos" */
--text-on-primary: #ffffff;        /* Texto em botões primários */
--text-disabled: #d0d0d0;          /* Textos desabilitados */
```

### Superfícies
```css
--surface-page: #f5f5f7;           /* Background principal da aplicação */
--surface-card: #ffffff;           /* Cards, painéis laterais */
--surface-elevated: #ffffff;       /* Modais, dropdowns (com sombra) */
--surface-input: #f8f8f8;          /* Background de inputs */
```

### Ações
```css
--action-primary: #4d8ff5;         /* Botão "All", botão "Update", ícones ativos */
--action-primary-hover: #3d7fe5;   /* Hover do botão primário */
--action-primary-pressed: #2d6fd5; /* Estado pressed */
--action-secondary: #e8e8ea;       /* Botões secundários */
--action-secondary-hover: #d8d8da; /* Hover secundário */
```

### Bordas
```css
--border-default: #e5e5e7;         /* Bordas sutis de cards */
--border-subtle: #f0f0f2;          /* Separadores muito suaves */
--border-focus: #4d8ff5;           /* Borda em estado de foco */
--border-input: #e0e0e2;           /* Bordas de inputs */
```

### Status
```css
--status-success: #4d8ff5;         /* Tarefas completas (checkmark) */
--status-progress: #4d8ff5;        /* Barra de progresso */
--status-inactive: #e8e8ea;        /* Tasks não selecionadas */
--status-warning: #ff9500;         /* (não identificado na UI, sugestão) */
--status-error: #ff3b30;           /* (não identificado na UI, sugestão) */
```

---

## 📝 Tipografia

### Família de Fontes
```css
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
/* Aproximação: A fonte parece ser Inter ou SF Pro Display */
```

### Tamanhos
```css
--text-xs: 11px;      /* Pequenos labels, subtextos */
--text-sm: 13px;      /* Texto "Pomos Q/2", labels secundários */
--text-base: 15px;    /* Texto padrão de tarefas, botões */
--text-lg: 17px;      /* Títulos de seções como "Daily Progress" */
--text-xl: 20px;      /* Subtítulos maiores */
--text-2xl: 24px;     /* Títulos principais */
--text-3xl: 48px;     /* Timer: 22:45 */
```

### Pesos
```css
--font-normal: 400;    /* Texto padrão */
--font-medium: 500;    /* Labels, botões */
--font-semibold: 600;  /* Títulos de seções */
--font-bold: 700;      /* Timer, números importantes */
```

### Line Heights
```css
--leading-tight: 1.2;   /* Títulos */
--leading-normal: 1.5;  /* Texto padrão */
--leading-relaxed: 1.6; /* Parágrafos longos */
```

---

## 📏 Espaçamentos

### Sistema de Grid (Base 4px)
```css
--space-1: 4px;    /* Micro espaçamentos */
--space-2: 8px;    /* Padding interno mínimo */
--space-3: 12px;   /* Espaçamento entre elementos próximos */
--space-4: 16px;   /* Padding padrão de cards */
--space-5: 20px;   /* Espaçamento médio */
--space-6: 24px;   /* Padding entre seções */
--space-8: 32px;   /* Espaçamento grande entre blocos */
--space-10: 40px;  /* Margem de seções */
--space-12: 48px;  /* Espaçamento extra-large */
--space-16: 64px;  /* Margem superior/inferior de páginas */
```

### Aplicações Específicas
```css
--spacing-card-padding: var(--space-6);        /* 24px */
--spacing-section-gap: var(--space-8);         /* 32px */
--spacing-list-item-gap: var(--space-3);       /* 12px */
--spacing-button-padding-x: var(--space-6);    /* 24px */
--spacing-button-padding-y: var(--space-3);    /* 12px */
```

---

## 🔲 Bordas e Raios

### Border Radius
```css
--radius-sm: 4px;    /* Elementos pequenos, badges */
--radius-md: 8px;    /* Inputs, botões secundários */
--radius-lg: 12px;   /* Cards, painéis */
--radius-xl: 16px;   /* Cards maiores */
--radius-2xl: 24px;  /* Elementos especiais */
--radius-full: 9999px; /* Botões circulares, progress bar */
```

### Bordas
```css
--border-width-thin: 1px;   /* Bordas padrão */
--border-width-medium: 2px; /* Bordas enfatizadas */
--border-width-thick: 3px;  /* Progress ring */
```

---

## 🌑 Sombras

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
/* Cards sutis, hover states */

--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 
             0 2px 4px -1px rgba(0, 0, 0, 0.04);
/* Cards principais, painéis laterais */

--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -2px rgba(0, 0, 0, 0.05);
/* Modais, menus dropdown */

--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 10px 10px -5px rgba(0, 0, 0, 0.04);
/* Elementos elevados importantes */
```

---

## 🧩 Componentes

### Botões

#### Primary Button
```css
.button-primary {
  background: var(--action-primary);
  color: var(--text-on-primary);
  padding: var(--space-3) var(--space-6); /* 12px 24px */
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  border: none;
  box-shadow: none;
  transition: background 0.2s ease;
}

.button-primary:hover {
  background: var(--action-primary-hover);
}

.button-primary:active {
  background: var(--action-primary-pressed);
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: var(--text-secondary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  border: 1px solid var(--border-default);
  transition: background 0.2s ease;
}

.button-secondary:hover {
  background: var(--surface-input);
}
```

#### Icon Button
```css
.button-icon {
  background: transparent;
  color: var(--text-muted);
  padding: var(--space-2);
  border-radius: var(--radius-md);
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-icon:hover {
  background: var(--surface-input);
  color: var(--text-primary);
}
```

### Cards

```css
.card {
  background: var(--surface-card);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-subtle);
}

.card-elevated {
  box-shadow: var(--shadow-lg);
}
```

### Progress Bar

```css
.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--surface-input);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--status-progress);
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}
```

### Circular Progress (Timer)

```css
.circular-progress {
  width: 240px;
  height: 240px;
  position: relative;
}

.circular-progress-ring {
  stroke: var(--action-primary);
  stroke-width: 6px;
  fill: none;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
}

.circular-progress-background {
  stroke: var(--border-subtle);
  stroke-width: 6px;
  fill: none;
}

.circular-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
}
```

### Task List Item

```css
.task-item {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  transition: background 0.2s ease;
  gap: var(--space-3);
}

.task-item:hover {
  background: var(--surface-input);
}

.task-item-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border-input);
  flex-shrink: 0;
}

.task-item-checkbox.checked {
  background: var(--status-success);
  border-color: var(--status-success);
}

.task-item-title {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  flex: 1;
}

.task-item-subtitle {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-top: var(--space-1);
}
```

### Input Fields

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  background: var(--surface-input);
  font-size: var(--text-base);
  color: var(--text-primary);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--border-focus);
  background: var(--surface-card);
}

.input::placeholder {
  color: var(--text-muted);
}
```

### Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  background: var(--action-primary);
  color: var(--text-on-primary);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}

.badge-secondary {
  background: var(--surface-input);
  color: var(--text-secondary);
}
```

### Navigation Tabs

```css
.tabs {
  display: flex;
  gap: var(--space-2);
  background: transparent;
}

.tab {
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  background: var(--surface-input);
}

.tab.active {
  background: var(--action-primary);
  color: var(--text-on-primary);
}
```

---

## 📱 Responsividade

### Breakpoints
```css
--breakpoint-sm: 640px;   /* Mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large Desktop */
```

### Container Widths
```css
--container-max-width: 1200px;
--sidebar-width: 360px;
--content-max-width: 800px;
```

---

## ⚡ Transições e Animações

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

--easing-default: cubic-bezier(0.4, 0, 0.2, 1);
--easing-in: cubic-bezier(0.4, 0, 1, 1);
--easing-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## 🎯 Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-overlay: 300;
--z-modal: 400;
--z-toast: 500;
--z-tooltip: 600;
```

---

## 📐 Layout Patterns

### Sidebar + Content Layout
```css
.app-layout {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  gap: var(--space-8);
  padding: var(--space-6);
  background: var(--surface-page);
  min-height: 100vh;
}
```

### Section Header
```css
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.section-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}
```

---

## ✅ Uso Recomendado

Este Design System deve ser usado como **fonte única da verdade** para:

- Desenvolvimento de componentes
- Geração de código por IA
- Design de novas features
- Manutenção de consistência visual
- Documentação técnica

### Como aplicar no projeto:

1. Importe as variáveis CSS no arquivo raiz
2. Use apenas tokens semânticos (nunca valores hard-coded)
3. Componentes devem referenciar os tokens
4. Mantenha o sistema atualizado conforme a UI evolui

---

**Versão:** 1.0  
**Última Atualização:** 02/02/2026  
**Baseado em:** Interface Pomodoro App