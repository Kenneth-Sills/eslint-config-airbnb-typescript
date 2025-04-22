/* eslint-disable import/extensions */
import airbnbTs from '../../base.js';

export default [
  ...airbnbTs.configs.base,
  {
    languageOptions: {
      parserOptions: {
        disallowAutomaticSingleRunInference: true, // Disable TS caching so it detects files generated inside tests
        project: 'test/utils/tsconfig.test.json',
      },
    },
  },
];
