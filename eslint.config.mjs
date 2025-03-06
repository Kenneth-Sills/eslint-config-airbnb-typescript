/* eslint-disable import/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbTs from './base.js';

export default [
  { ignores: ['node_modules/', 'test/temp'] },
  ...airbnbTs.configs.base,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}'],
    rules: {
      'import/no-unresolved': 'off', // Doesn't support imports without a "main" field
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['**/*.config.*', 'test/**/*'] },
      ],
    },
  },
  eslintConfigPrettier,
];
