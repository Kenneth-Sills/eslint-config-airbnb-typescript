import type { Linter } from 'eslint';

export const baseConfig: Linter.LegacyConfig = {
  extends: ['eslint-config-airbnb-base', './base.js'],
  parserOptions: {
    project: './tsconfig.test.json',
    disallowAutomaticSingleRunInference: true, // Disable TS caching so it detects files generated inside tests
  },
};

export const reactConfig: Linter.LegacyConfig = {
  extends: ['eslint-config-airbnb', './index.js'],
  parserOptions: {
    project: './tsconfig.test.json',
    disallowAutomaticSingleRunInference: true, // Disable TS caching so it detects files generated inside tests
  },
  settings: {
    react: {
      version: '18',
    },
  },
};
