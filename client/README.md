# Task Manager

Современное приложение для управления задачами, созданное с использованием React, TypeScript и Ant Design. Включает в себя просмотр календаря, канбан-доску, возможность создания / редактирования задач и заполнители для mindmaps и canvas.

## Особенности

- Просмотр календаря для задач с возможностью создания на основе даты.
- Канбан-доска с поддержкой перетаскивания.
- Операции с задачами (создание, чтение, обновление, удаление).
- Адаптивный дизайн с поддержкой темных / светлых тем.
- Поддержка нескольких языков (русский / английский).
- Аутентификация пользователя и управление профилем.

## Технический стек

- **Интерфейс**: React, TypeScript, React Router v6, MobX, Ant Design, Tailwind CSS, React Hook Form, i18next, react-big-calendar, @dnd-kit
- **Инструмент сборки**: Vite
- **Редактирование/форматирование**: ESLint, более привлекательный
- **Будущие функции**: Mindmaps (react-flow), Canvas (konva.js)


## Настройка

1. Клонируем репозиторий:
   ```bash 
   git https://github.com/username/task-manager.git
   cd task-manager
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```
4. Откройте `http://localhost:5173` в вашем браузере.

## Структура проекта

Основана на **функционально-ориентированном дизайне**:
- `app/` - Глобальная конфигурация (маршруты, поставщики, стили).
- `entities/` - Бизнес-объекты (задача, пользователь, Доска объявлений).
- `features/` - Функциональные модули (авторизация, управление задачами и т.д.).
- `pages/` - Компоненты страницы.
- `shared/` - Общие утилиты, компоненты и клиент API.

```
client/
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


## Планы на будущее

- Добавьте функциональность mindmap с помощью "react-flow".
- Добавьте функциональность canvas с помощью "konva.js`.

