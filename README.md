# School CMS — Google Sheet Powered Website

A responsive, production-ready Vue 3 + Vite frontend that pulls all of its
content and settings from a Google Sheet, so non-technical staff can update
the website by editing a spreadsheet.

## Tech Stack

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Vue Router (lazy-loaded routes)
- Pinia
- Axios
- Element Plus
- SCSS
- Mobile-first responsive design

## How It Works

Your Google Sheet has two columns, `key` and `value`:

| key               | value                          |
| ----------------- | ------------------------------- |
| app_name           | My School                       |
| phone              | 012345678                       |
| telegram           | https://t.me/myschool           |
| facebook           | https://facebook.com/myschool   |
| email              | info@gmail.com                  |
| address            | Phnom Penh                      |
| hero_title         | Welcome to Our School           |
| hero_description   | Best University in Cambodia     |
| banner             | https://image.jpg               |
| logo               | https://logo.png                |

A Google Apps Script Web App (see `google-apps-script/Code.gs`) serves this
sheet as JSON:

```json
[
  { "key": "app_name", "value": "My School" },
  { "key": "phone", "value": "012345678" }
]
```

The frontend fetches that JSON and converts it into a flat object via
`loadSettings()`, so any component can read `settings.app_name`,
`settings.phone`, `settings.banner`, etc. — no searching through arrays.

## Project Structure

```
src/
  api/            axios instance + Google Sheet fetch function
  composables/    useSetting.js -> loadSettings() helper
  stores/         Pinia stores (setting, theme)
  router/         Vue Router with lazy-loaded routes
  layouts/        DefaultLayout.vue (header/main/footer shell)
  views/          Home.vue, About.vue, Contact.vue, NotFound.vue
  components/     AppHeader, AppFooter, HeroSection, ContactCard, Loading, ErrorState
  assets/styles/  SCSS design tokens + global styles
```

## Getting Started

### 1. Set up the Google Sheet backend

1. Create a Google Sheet with `key` / `value` columns (row 1 = header).
2. Open **Extensions → Apps Script**, paste the contents of
   `google-apps-script/Code.gs`.
3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the generated `/exec` URL.

### 2. Configure the frontend

```bash
cp .env.example .env
```

Paste your Web App URL into `.env`:

```
VITE_GOOGLE_SHEET_API_URL=https://script.google.com/macros/s/xxxxxxxx/exec
```

### 3. Install and run

```bash
npm install
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Using Settings In Your Own Components

```vue
<script setup>
import { useSettingStore } from '@/stores/setting'
const settingStore = useSettingStore()
</script>

<template>
  <h1>{{ settingStore.settings.app_name }}</h1>
  <p>{{ settingStore.settings.hero_description }}</p>
</template>
```

Or, outside components/composition context:

```js
import { loadSettings } from '@/composables/useSetting'
const settings = await loadSettings()
```

## Features

- ✔ Sticky responsive header with hamburger + drawer navigation on mobile
- ✔ Horizontal nav on desktop
- ✔ Hero, cards, and typography that scale across mobile/tablet/desktop
- ✔ Dark/light theme toggle (persisted to localStorage)
- ✔ Element Plus Skeleton while the sheet is loading
- ✔ ElResult + retry button on fetch failure
- ✔ Back-to-top button
- ✔ Dynamic, SEO-friendly page titles built from `app_name`
- ✔ Lazy-loaded routes for performance

## Notes

- The in-memory settings cache (`composables/useSetting.js`) avoids refetching
  the sheet on every navigation; call `settingStore.retry()` to force a
  refresh.
- Colors, radii, and shadows are defined once in
  `src/assets/styles/variables.scss` so the theme is easy to restyle.
