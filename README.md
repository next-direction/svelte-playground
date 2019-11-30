# Svelte Playground

This project is used to play around with Svelte and Rollup.

The goal is to create several entry points in rollup that can render several Svelte "widgets" or complex components on a page.

The goal is **not** to make a complete SPA or something like that.

## Instructions

To work with this playground simple clone the repo an install dependencies with

```shell script
npm install
```

Then you have two commands available. The first starts the dev server

```shell script
npm run app:dev
```

With this running, every time you change something on your files, the bundles are re-built.

The second command builds the bundles for production:

```shell script
npm run app:prod
```

Finally, just open the index.html file in the browser.

## Manual reload

Currently there is no hot reload of anything. This means, after every change you have to reload the page manually.