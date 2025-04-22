/* eslint-disable import/extensions */
import airbnbTs from '../../index.js';

export default [
  ...airbnbTs.configs.react,
  {
    languageOptions: {
      parserOptions: {
        disallowAutomaticSingleRunInference: true, // Disable TS caching so it detects files generated inside tests
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
