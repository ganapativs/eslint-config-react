# Base ESLint config for react setup

Automagically add `ESLint` support to `react` setup by adding this package.

## Install

```sh
yarn add eslint @ganapativs/eslint-config-react --dev
```

## Enable ESLint

```json
// Tell editor to use eslint config from '@ganapativs/eslint-config-react'
// package.json
{
    // ...
    "eslintConfig": {
      "extends": "@ganapativs/react"
    },
    // ...
}
```

## Extend ESLint config

```sh
# create `.eslintrc` in root folder of the service
# .eslintrc
{
    "extends": "@ganapativs/react",
    "rules": {
        # custom rules here
    }
}
```

## Publish

```sh
# Scoped packages are private by default
npm publish --access public
```
