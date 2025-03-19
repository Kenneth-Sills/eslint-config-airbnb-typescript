import type { Linter } from 'eslint';

export const baseConfig: Linter.LegacyConfig = {
  extends: ['eslint-config-airbnb-base', './base.js'],
  parserOptions: {
    project: './tsconfig.test.json',
  },
};

export const reactConfig: Linter.LegacyConfig = {
  extends: ['eslint-config-airbnb', './index.js'],
  parserOptions: {
    project: './tsconfig.test.json',
  },
  settings: {
    react: {
      version: '18',
    },
  },
};
