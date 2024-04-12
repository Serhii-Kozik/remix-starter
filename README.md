# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Stack

- Testing: [Vitest](https://vitest.dev) + [@remix-run/testing](https://remix.run/docs/en/main/other-api/testing)
- Styling : [Tailwind](https://tailwindcss.com/)
- Code quality: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [git hooks](https://typicode.github.io/husky/)
- i18n: [i18next](https://remix.run/resources/remix-i18next)
- API mocking: [MSW](https://mswjs.io/)

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
