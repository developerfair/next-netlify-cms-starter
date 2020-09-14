---
title: Next.js Setup
author: Justin
date: 2020-09-14T10:38:26.040Z
featuredImage: /images/next-js.png
---
Run the following commands to create a blank next.js project and test its working:

```shell
yarn create next-app client-cms

cd client-cms

yarn dev
```

You should see something like:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75d8e57c-1eca-411d-84d1-b8bfeaae094a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75d8e57c-1eca-411d-84d1-b8bfeaae094a/Untitled.png)

## Setup TypeScript

Add TypeScript using the command:

```shell
yarn add typescript @types/react @types/node -D
```

Rename the .js files to .tsx:

```shell
pages/_app.js -> pages/_app.tsx
pages/index.js -> pages/index.tsx
```

Run `yarn dev` again and next.js should detect the TypeScript files and generate a tsconfig.json file.

```shell
yarn dev

We detected TypeScript in your project and created a tsconfig.json file for you.
```

## ESLint & Prettier

Install ESLint & Prettier using the command:

```shell
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier eslint -D
```

Create a ESLint config file in the root of the project:

```javascript
filename: .eslintrc.js

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["~"],
      },
    },
  },
};
```

## Add Tailwind CSS

Add and setup Tailwind CSS using the following commands:

```shell
yarn add tailwindcss -D
npx tailwind init
```

This creates a `tailwind.config.js` file. Update the tailwind config file with purge settings:

```javascript
filename: tailwind.config.js

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

## Add PostCSS

Add a PostCSS config file, create the following file in the root of the project:

```javascript
filename: postcss.config.js

module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
}
```

Add the [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env) module which converts modern CSS to wider browser compatibility format:

```javascript
yarn add postcss-preset-env -D
```

Create a tailwind.css file to import Tailwind CSS:

```jsx
filename: styles/tailwind.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update the next `_app.tsx` file to import `tailwind.css`:

```jsx
filename: pages/_app.tsx

import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

I've removed the import of the `global.css` file as we'll be deleting that file during the clean up step below.

## Clean up

Remove the `Home.module.css` import from `index.tsx` and any references to the styles and images:

```xml
import Head from "next/head";

export default function Index() {
  return (
    <div className="p-4">
      <Head>
        <title>devfair client cms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl">
          Welcome to <a href="https://devfair.com">devfair client cms!</a>
        </h1>

        <p className="mt-0 mb-4 text-gray-600">
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
}
```

Delete the unused files:

```bash
styles/globals.css
styles/Home.module.css
public/vercel.svg
pages/api/hello.js
```

## Done!

When you run yarn dev you should now have a working next.js site with typescript, tailwind.css setup:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5c61d22-b6b8-4366-a244-c5bbb541cc36/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5c61d22-b6b8-4366-a244-c5bbb541cc36/Untitled.png)
