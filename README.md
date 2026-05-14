# База знаний по государственным финансам в России

<База знаний>-справочник об устройстве государственных финансов в России и о работе с открытыми финансовыми данными. Сайт собирается из этого репозитория с помощью [Docusaurus 3](https://docusaurus.io/).

## Для редакторов и ИИ-ассистентов

- **[`AGENTS.md`](./AGENTS.md)** — обязательные шаблоны карточек wiki и требования к перекрёстным ссылкам (в т.ч. для Cursor и других средств).
- **[`wiki/intro/how-to-use.md`](wiki/intro/how-to-use.md)** — одиннадцать разделов книги, принципы страниц под поиск и RAG, соглашения по ссылкам.
- **[`wiki/intro/data-map.md`](wiki/intro/data-map.md)** — типовые маршруты от вопроса к глоссарию, ИС, источникам данных и отчётности.
- **[`CONTRIBUTING.md`](./CONTRIBUTING.md)** — участие в проекте; перед PR выполняйте `npm run build` (сборка падает при битых внутренних ссылках).

## Структура репозитория

```
.
├── AGENTS.md              # Правила контента и ссылок для редакторов и агентов
├── CONTRIBUTING.md        # Участие и соглашения о ссылках в Markdown
├── docusaurus.config.ts   # Конфигурация сайта Docusaurus
├── sidebars.ts            # Структура навигации и сайдбара
├── package.json           # Зависимости и npm-скрипты
├── tsconfig.json          # Настройки TypeScript
├── src/                   # Кастомные стили и компоненты
│   └── css/custom.css
├── static/                # Статические ассеты (PDF, изображения)
│   └── assets/
└── wiki/                  # Контент книги (маршрут сайта — корень /)
    ├── README.md          # Главная страница книги
    ├── intro/             # Введение, карта данных, обзор бюджета
    ├── glossary/          # Глоссарий (один термин — один файл)
    ├── organizations/     # Организации
    ├── information-systems/
    ├── budget-system/
    ├── budget-classification/
    ├── data-sources/      # Федеральные, региональные, гражданские источники
    ├── howto/             # Практические инструкции
    ├── legal/             # Нормативная база
    ├── reporting/         # Бюджетная отчётность
    └── reference/         # Справочники, теги, ссылки
```

## Требования

- Node.js >= 20
- npm >= 10

## Быстрый старт

```bash
# Установить зависимости
npm install

# Запустить локальный сервер разработки
npm start

# Открыть в браузере
# http://localhost:3000/finguide/
```

## Основные команды

| Команда | Описание |
| --- | --- |
| `npm start` | Запуск локального dev-сервера с горячей перезагрузкой |
| `npm run build` | Сборка production-версии в каталог `build/`; при битых ссылках в Markdown или маршрутах документов сборка завершается с ошибкой |
| `npm run serve` | Локальный просмотр собранного сайта |
| `npm run clear` | Очистка кэша Docusaurus |
| `npm run typecheck` | Проверка типов TypeScript |
| `npm run deploy` | Публикация на GitHub Pages |

## Как редактировать контент

1. Откройте нужный Markdown-файл в каталоге `wiki/`.
2. Следуйте [`AGENTS.md`](./AGENTS.md) и соглашениям из [`CONTRIBUTING.md`](./CONTRIBUTING.md).
3. Frontmatter (`title`, при желании `description`, `tags`, `last_updated`) улучшает навигацию и поиск.
4. Новый раздел — подкаталог в `wiki/` с `README.md` и при необходимости правка `sidebars.ts`.
5. Картинки и файлы — в `static/assets/`, ссылки вида `/assets/имя-файла`.

## Конфигурация

- **`docusaurus.config.ts`** — заголовок, URL, navbar, footer; битые ссылки и якоря при сборке приводят к ошибке (`onBrokenLinks`, `onBrokenAnchors`, строгая проверка Markdown-ссылок).
- **`sidebars.ts`** — структура и порядок навигации.
- **`src/css/custom.css`** — пользовательские стили.

## Деплой

Сайт: [https://infoculture.github.io/finguide/](https://infoculture.github.io/finguide/) (репозиторий [infoculture/finguide](https://github.com/infoculture/finguide)). В `docusaurus.config.ts` заданы `url`, `baseUrl: /finguide/`, `organizationName: infoculture`, `projectName: finguide`.

### Настройка репозитория на GitHub

1. **Settings → Pages** (раздел *Build and deployment*).
2. Источник: **GitHub Actions** (не «Deploy from a branch»). Workflow: [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) собирает статику и публикует через официальные шаги `upload-pages-artifact` / `deploy-pages`.

При первом запуске GitHub может запросить подтверждение для среды **`github-pages`** (разрешите деплой для workflow из этого репозитория).

Локальная команда **`npm run deploy`** по-прежнему может пушить в ветку **`gh-pages`** (см. ниже); для CI это не требуется.

### Публикация из CI

При каждом push в **`master`** или **`main`** (и при ручном **workflow dispatch**) в репозитории **`infoculture/finguide`** workflow **Deploy GitHub Pages** собирает сайт и выкладывает его на **https://infoculture.github.io/finguide/**.

### Публикация обновлений с машины

```bash
npm run build   # убедиться, что сборка проходит
GIT_USER=<ваш_github_логин> npm run deploy
```

Если Git запрашивает пароль при HTTPS, для аккаунта с 2FA используйте **Personal Access Token** (переменная `GIT_PASS` вместе с `GIT_USER`, см. [документацию Docusaurus](https://docusaurus.io/docs/deployment#deploying-to-github-pages)) или деплой по SSH: `USE_SSH=true GIT_USER=<логин> npm run deploy` при настроенном ключе и актуальных записях `github.com` в `~/.ssh/known_hosts`.

## Лицензия

[MIT](./LICENSE)
