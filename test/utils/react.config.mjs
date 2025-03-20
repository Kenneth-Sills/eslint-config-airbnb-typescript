import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // baseDirectory: import.meta.dirname,
});

export default [
  ...compat.extends('airbnb'),
  ...compat.extends('./index.js'),
  {
    languageOptions: {
      parserOptions: {
        disallowAutomaticSingleRunInference: true,
        project: 'test/utils/tsconfig.test.json',
      },
    },
    settings: {
      react: {
        version: '18', // Suppress React detect version warning
      },
    },
  },
];
