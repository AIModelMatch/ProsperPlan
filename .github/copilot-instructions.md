<!-- Copilot / AI Agent Instructions for the ProsperPlan repo -->

# Copilot Instructions — ProsperPlan

Purpose: help an AI coding agent get productive quickly in this small React + TypeScript app.

- **Big picture:** This is a single-page React app bootstrapped with Vite and TypeScript. The app stores an in-memory application state (`IAppConfig`) in `src/App.tsx` and uses default starter data from `src/constants.ts`. There is currently no backend or persistence layer in the repository — state is local to the client.

- **Runtime & developer commands:** use the `package.json` scripts.
  - Start dev server: `npm run dev` (runs `vite --host`).
  - Build production: `npm run build` (runs `tsc && vite build`).
  - Preview build: `npm run preview`.
  - Lint: `npm run lint`.

- **Entry points & styling:**
  - HTML entry: `index.html` mounts React into `<div id="root">` and loads `src/main.tsx`.
  - App root: `src/main.tsx` → `src/App.tsx`.
  - CSS / Tailwind: `src/index.css` imports Tailwind utilities; keep styling via utility classes.

- **Key files to read first (examples in the code):**
  - `src/types.ts` — canonical TypeScript interfaces (`IAppConfig`, `IAccount`, `IBudgetCategory`, `IDebtItem`, `IPaycheckInfo`). AI should prefer these types when creating or modifying state shapes.
  - `src/constants.ts` — default starter data (`DEFAULT_ACCOUNTS`, `DEFAULT_BUDGET_CATEGORIES`, `DEFAULT_DEBTS`, `DEFAULT_PAYCHECK_INFO`). Use these constants when adding default fixtures or resetting state.
  - `src/App.tsx` — shows current state layout, `calculateNetWorth` helper and UI patterns (example: formatting currency via `Intl.NumberFormat`). It also demonstrates the `activeMonth` format (`YYYY-MM`) and how `accounts` are treated (assets vs liabilities via `isLiability`).

- **Data & naming conventions (project-specific):**
  - IDs: use short dash-separated IDs like `acc-1`, `cat-1`, `debt-1`.
  - Dates: `activeMonth` is `YYYY-MM` (e.g. `2025-01`). Transaction `date` fields are ISO date strings (`YYYY-MM-DD` / full ISO permitted).
  - Monetary values: plain numbers in USD; formatting is handled at render time (see `formatCurrency` in `src/App.tsx`).
  - Account `type`: one of `'checking' | 'savings' | 'investment' | 'credit_card' | 'loan'` (defined in `src/types.ts`). Use these exact literals when adding or checking types.

- **Component & state patterns:**
  - The app currently uses local React state (`useState`) in `src/App.tsx`. New features should follow local state or introduce a small state manager only if necessary.
  - Keep data manipulations type-safe using the interfaces from `src/types.ts`.

- **Integration points to watch for:**
  - No network layer exists. If implementing APIs, place HTTP helpers under `src/api/` and mirror shapes in `src/types.ts`.
  - `userId` in `IAppConfig` is a placeholder (`'user-default-01'`) — if adding auth, replace this pattern and centralize user identity management.

- **Linting & formatting:** use `npm run lint`. The repo includes ESLint dev deps in `package.json`. There is no test runner configured — do not assume tests exist.

- **When editing files, prefer small targeted changes:**
  - Match existing style: TypeScript interfaces in `src/types.ts`, constants in `src/constants.ts`, and presentational code in `src/App.tsx`.
  - Preserve Tailwind class usage in JSX; do not replace with global CSS unless adding new utility classes to `src/index.css`.

- **Examples (copyable patterns):**
  - Net worth calc: reference `calculateNetWorth(accounts: IAccount[])` in `src/App.tsx`.
  - Add a default account fixture: append to `DEFAULT_ACCOUNTS` in `src/constants.ts` following the `IAccount` shape.

- **What not to do (observed gaps):**
  - Do not assume persistence, REST API endpoints, or tests exist. Any network or testing infra must be added explicitly.

If anything here is unclear or you want a different focus (tests, API scaffolding, or CI), tell me which area to expand and I will update this file.
