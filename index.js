module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["import", "prettier", "react-hooks"],
  env: {
    browser: true,
    es6: true,
    node: false,
    mocha: false
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"]
      }
    }
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        printWidth: 80,
        trailingComma: "all",
        jsxBracketSameLine: true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  globals: {}
};
