import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // baseDirectory: import.meta.dirname,
});

export default [
  ...compat.extends('airbnb-base'),
  ...compat.extends('./base.js'),
  {
    languageOptions: {
      parserOptions: {
        disallowAutomaticSingleRunInference: true,
        project: 'test/utils/tsconfig.test.json',
      },
    },
  },
];
