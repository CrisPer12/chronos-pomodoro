<div align="center">

# ⏱️ Chronos Pomodoro

### *Maximize sua produtividade com a técnica Pomodoro*

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
</p>

---

### 🎯 Um timer Pomodoro moderno, elegante e funcional para turbinar sua produtividade

</div>

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Features](#-features)
- [Demonstração](#-demonstração)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🚀 Sobre o Projeto

**Chronos Pomodoro** é uma aplicação web moderna e intuitiva que implementa a famosa **Técnica Pomodoro** de gerenciamento de tempo. Desenvolvida com as tecnologias mais recentes do ecossistema React, oferece uma experiência fluida e profissional para quem busca aumentar o foco e a produtividade.

### 🎯 O que é a Técnica Pomodoro?

A Técnica Pomodoro é um método de gestão de tempo que utiliza intervalos cronometrados para maximizar o foco e a produtividade:

- **25 minutos** de trabalho focado (Pomodoro)
- **5 minutos** de pausa curta
- **15 minutos** de pausa longa (após 4 pomodoros)

---

## ✨ Features

### 🔥 Funcionalidades Principais

- ⏱️ **Timer Pomodoro Completo**
  - Modos: Pomodoro (25min), Pausa Curta (5min), Pausa Longa (15min)
  - Controles intuitivos: Play, Pause, Reset
  - Progressão visual com barra circular animada
  - Notificações sonoras ao finalizar cada sessão

- 📝 **Gerenciamento de Tarefas**
  - Criar, editar e excluir tarefas
  - Marcar tarefas como concluídas
  - Contador de pomodoros por tarefa
  - Seleção de tarefa ativa
  - Interface drag-and-drop (em desenvolvimento)

- 📊 **Acompanhamento de Progresso**
  - Visualização de pomodoros concluídos no dia
  - Meta diária configurável
  - Estatísticas de produtividade

- ⚙️ **Configurações Personalizáveis**
  - Ajuste de duração dos timers
  - Personalização de metas diárias
  - Preferências de notificações

- 🎨 **Interface Moderna**
  - Design clean e minimalista
  - Animações suaves e responsivas
  - Tema claro otimizado para foco
  - Totalmente responsivo (mobile-first)

---

## 🎬 Demonstração

> 📸 *Screenshots e GIFs serão adicionados em breve*

```
┌─────────────────────────────────────┐
│         CHRONOS POMODORO            │
├─────────────────────────────────────┤
│                                     │
│          ⏱️  25:00                  │
│         ●●●●●●●●○○                  │
│                                     │
│    [▶️ Iniciar]  [⏸️ Pausar]        │
│                                     │
├─────────────────────────────────────┤
│  📝 Minhas Tarefas                  │
│  ○ Estudar React                    │
│  ✓ Fazer exercícios                 │
│  ○ Revisar código                   │
└─────────────────────────────────────┘
```

---

## 🛠️ Tecnologias

### Core

- **[React 19.2.0](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite 7.2.4](https://vitejs.dev/)** - Build tool ultra-rápido

### Estilização

- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first
- **[RSuite 5.73.1](https://rsuitejs.com/)** - Biblioteca de componentes React
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utilitário para classes condicionais

### Gerenciamento de Estado

- **[Zustand 5.0.2](https://github.com/pmndrs/zustand)** - Gerenciamento de estado minimalista

### UI/UX

- **[Lucide React 0.468.0](https://lucide.dev/)** - Ícones modernos e customizáveis
- **[React Circular Progressbar 2.1.0](https://www.npmjs.com/package/react-circular-progressbar)** - Barra de progresso circular

### Desenvolvimento

- **[ESLint 9.39.1](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[PostCSS 8.4.49](https://postcss.org/)** - Transformador de CSS
- **[Autoprefixer 10.4.20](https://github.com/postcss/autoprefixer)** - Prefixos CSS automáticos

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e escalável:

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Layout/         # Componentes de layout (Header, AppLayout)
│   ├── Tasks/          # Componentes de gerenciamento de tarefas
│   └── Timer/          # Componentes do timer Pomodoro
├── hooks/              # Custom React Hooks
├── store/              # Gerenciamento de estado (Zustand)
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
└── assets/             # Recursos estáticos
```

### 🎯 Padrões e Boas Práticas

- ✅ **Componentização** - Componentes pequenos e reutilizáveis
- ✅ **Tipagem Forte** - TypeScript em todo o projeto
- ✅ **Custom Hooks** - Lógica reutilizável e separada da UI
- ✅ **Estado Global** - Zustand para gerenciamento eficiente
- ✅ **Código Limpo** - ESLint e convenções consistentes
- ✅ **Performance** - Vite para builds otimizados

---

## 📦 Instalação

### Pré-requisitos

- **Node.js** >= 18.0.0
- **Yarn** ou **npm**

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/chronos-pomodoro.git
   cd chronos-pomodoro
   ```

2. **Instale as dependências**
   ```bash
   # Com Yarn (recomendado)
   yarn install

   # Ou com npm
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   # Com Yarn
   yarn dev

   # Ou com npm
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### 🚀 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Cria build de produção otimizado |
| `yarn preview` | Preview do build de produção |
| `yarn lint` | Executa o linter (ESLint) |

---

## 💡 Como Usar

### 1️⃣ Adicionar uma Tarefa

1. Digite o nome da tarefa no campo de input
2. Clique em "Adicionar Tarefa" ou pressione Enter
3. A tarefa aparecerá na lista abaixo

### 2️⃣ Iniciar um Pomodoro

1. Selecione uma tarefa clicando nela (opcional)
2. Clique no botão "Iniciar" no timer
3. Foque no trabalho por 25 minutos
4. Quando o timer terminar, faça uma pausa

### 3️⃣ Gerenciar Tarefas

- **Completar**: Clique no círculo à esquerda da tarefa
- **Editar**: Clique no menu (⋮) e selecione "Editar"
- **Excluir**: Clique no menu (⋮) e selecione "Excluir"

### 4️⃣ Personalizar Configurações

1. Clique no ícone de configurações (⚙️)
2. Ajuste as durações dos timers
3. Configure sua meta diária de pomodoros
4. Salve as alterações

---

## 📁 Estrutura do Projeto

```
chronos-pomodoro/
│
├── public/                 # Arquivos públicos estáticos
│
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── AppLayout.tsx      # Layout principal da aplicação
│   │   │   └── Header.tsx         # Cabeçalho com logo e navegação
│   │   │
│   │   ├── Tasks/
│   │   │   ├── TaskItem.tsx       # Item individual de tarefa
│   │   │   └── TaskList.tsx       # Lista de tarefas
│   │   │
│   │   └── Timer/
│   │       ├── TimerDisplay.tsx   # Display circular do timer
│   │       └── TimerControls.tsx  # Controles do timer
│   │
│   ├── hooks/
│   │   └── useTimer.ts            # Hook customizado do timer
│   │
│   ├── store/
│   │   └── usePomodoroStore.ts    # Store Zustand global
│   │
│   ├── types/
│   │   └── index.ts               # Definições de tipos TypeScript
│   │
│   ├── utils/
│   │   └── formatTime.ts          # Funções utilitárias
│   │
│   ├── App.tsx                    # Componente raiz
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Estilos globais
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🗺️ Roadmap

### ✅ Fase 1 - MVP (Concluído)
- [x] Timer Pomodoro funcional
- [x] Gerenciamento básico de tarefas
- [x] Interface responsiva
- [x] Controles de timer

### 🚧 Fase 2 - Melhorias (Em Desenvolvimento)
- [ ] Persistência de dados (LocalStorage)
- [ ] Notificações do navegador
- [ ] Sons personalizáveis
- [ ] Temas (claro/escuro)
- [ ] Estatísticas detalhadas

### 🔮 Fase 3 - Features Avançadas (Planejado)
- [ ] Gráficos de produtividade
- [ ] Exportação de relatórios
- [ ] Sincronização em nuvem
- [ ] Aplicativo PWA
- [ ] Integração com calendários
- [ ] Modo de foco (bloqueio de sites)

---

## 🤝 Contribuindo

Contribuições são **muito bem-vindas**! Este projeto está aberto para melhorias.

### Como Contribuir

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add: Minha nova feature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### 📝 Convenções de Commit

- `Add:` Nova funcionalidade
- `Fix:` Correção de bug
- `Update:` Atualização de código existente
- `Remove:` Remoção de código/arquivo
- `Docs:` Documentação
- `Style:` Formatação, ponto e vírgula, etc
- `Refactor:` Refatoração de código

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Contato

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Desenvolvido com ❤️ e ☕ usando React + TypeScript**

</div>
