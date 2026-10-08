# Ecom Storefront

This repository contains the React/Vite storefront. The frontend expects a separately hosted backend API and image server.

## Deploy on Vercel

1. Import this repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Add the variables from `.env.example` in Vercel Project Settings → Environment Variables.
5. Set `VITE_APP_BACKEND_SERVER` and `VITE_APP_IMAGE_SERVER` to public HTTPS URLs. Do not use `localhost` in production.
6. Redeploy after saving the variables.

The repository includes a `vercel.json` SPA rewrite so direct navigation and refreshes on client-side routes resolve to the Vite application.

The original local `.env` file is intentionally excluded from Git. It can remain on a developer machine for local development, but production values must be configured in Vercel.

## Local development

Copy `.env.example` to `.env`, replace the placeholder values, then run:

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
```

The generated production files are written to `dist`.

## Original Vite notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
