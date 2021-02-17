# Heureka One Content Admin

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you need to get Firebase Configuration to `lib/firebaseConfig.ts`. Format of the file

```js
const config = {
  apiKey: 'XXXX',
  authDomain: 'XXX',
  databaseURL: 'XXX',
  projectId: 'XXX',
  storageBucket: 'XXX',
  messagingSenderId: 'XXX',
  appId: 'XXX',
};

export default config;
```

Then you will be able to run dev server using:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Techstack Used

- [Next.js](https://nextjs.org/) - learn about Next.js features and API.
- [Typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [Styled-components](https://styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [Firebase](https://firebase.google.com/) - platform developed by Google for creating mobile and web applications.

## Demo Link

You can find the application on the following link: [https://heureka-task.vercel.app/](https://heureka-task.vercel.app/)
If you don't have your own credentials, please reach out to @thylsky
