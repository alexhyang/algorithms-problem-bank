module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // jest rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valide-expect': 'error',

  },
  include: ["src/**/*.ts", "src/**/*.js"],
};
