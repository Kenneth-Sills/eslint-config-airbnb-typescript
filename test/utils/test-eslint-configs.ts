import type { Linter } from 'eslint';
import path from 'node:path';

export const baseConfig: Linter.LegacyConfig = {
  extends: ['eslint-config-airbnb-base', './base.js'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.test.json'),
    disallowAutomaticSingleRunInference: true, // Disable TS caching so it detects files generated inside tests
  },
};

export const reactConfig: Linter.LegacyConfig = {
  extends: ['eslint-config-airbnb', './index.js'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.test.json'),
    disallowAutomaticSingleRunInference: true, // Disable TS caching so it detects files generated inside tests
  },
  settings: {
    react: {
      version: '18', // Suppress React detect version warning
    },
  },
};
