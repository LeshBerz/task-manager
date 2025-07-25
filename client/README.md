```
task-manager/
├── src/
│   ├── app/
│   │   ├── providers/           # Провайдеры контекста (MobX, i18next, Theme)
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── I18nProvider.tsx
│   │   ├── routes/              # Конфигурация маршрутов
│   │   │   └── index.tsx
│   │   ├── styles/              # Глобальные стили
│   │   │   ├── index.css
│   │   │   └── tailwind.css
│   │   └── App.tsx              # Главный компонент приложения
│   ├── entities/                # Бизнес-сущности
│   │   ├── task/
│   │   │   ├── model/           # Интерфейсы и типы
│   │   │   │   └── types.ts
│   │   │   └── store/           # MobX стор
│   │   │       └── TaskStore.ts
│   │   ├── user/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── store/
│   │   │       └── UserStore.ts
│   │   └── board/
│   │       ├── model/
│   │       │   └── types.ts
│   │       └── store/
│   │           └── BoardStore.ts
│   ├── features/                # Функциональные модули
│   │   ├── auth/
│   │   │   ├── components/      # Компоненты для авторизации
│   │   │   │   └── LoginForm.tsx
│   │   │   └── store/           # Логика авторизации
│   │   │       └── AuthStore.ts
│   │   ├── task-management/
│   │   │   ├── components/      # Компоненты для задач
│   │   │   │   ├── TaskItem.tsx
│   │   │   │   └── TaskForm.tsx
│   │   │   └── hooks/           # Хуки для работы с задачами
│   │   │       └── useTaskActions.ts
│   │   ├── user-management/
│   │   │   ├── components/
│   │   │   │   ├── UserForm.tsx
│   │   │   │   └── UserTable.tsx
│   │   │   └── hooks/
│   │   │       └── useUserActions.ts
│   │   ├── theme-switch/
│   │   │   ├── components/
│   │   │   │   └── ThemeToggle.tsx
│   │   │   └── store/
│   │   │       └── ThemeStore.ts
│   │   ├── i18n/
│   │   │   ├── config/
│   │   │   │   └── i18n.ts
│   │   │   └── translations/
│   │   │       ├── en.json
│   │   │       └── ru.json
│   │   ├── calendar/
│   │   │   └── components/
│   │   │       └── TaskCalendar.tsx
│   │   ├── mindmap/
│   │   │   └── components/
│   │   │       └── MindmapPlaceholder.tsx
│   │   └── canvas/
│   │       └── components/
│   │           └── CanvasPlaceholder.tsx
│   ├── pages/
│   │   ├── Main/                # Главная страница (календарь)
│   │   │   └── index.tsx
│   │   ├── Board/               # Kanban-доска
│   │   │   └── index.tsx
│   │   ├── TaskCreate/          # Страница создания задачи
│   │   │   └── index.tsx
│   │   ├── TaskDetails/         # Страница редактирования задачи
│   │   │   └── index.tsx
│   │   ├── Login/               # Страница логина
│   │   │   └── index.tsx
│   │   ├── UserCreate/          # Страница создания пользователя
│   │   │   └── index.tsx
│   │   ├── UserEdit/            # Страница редактирования пользователя
│   │   │   └── index.tsx
│   │   ├── Mindmap/             # Заглушка для mindmap
│   │   │   └── index.tsx
│   │   └── Canvas/              # Заглушка для canvas
│   │       └── index.tsx
│   ├── shared/
│   │   ├── api/                 # API-клиент
│   │   │   ├── taskApi.ts
│   │   │   ├── userApi.ts
│   │   │   └── axiosInstance.ts
│   │   ├── components/          # Общие UI-компоненты
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── hooks/               # Общие хуки
│   │   │   └── useApi.ts
│   │   └── utils/               # Утилиты
│   │       ├── formatDate.ts
│   │       └── validate.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
├── .prettierrc
└── README.md
```