// @ts-nocheck
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

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
