const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#standard-library
 */
runTests(
  'standard-library',
  ['base', 'react'],
  [
    {
      // 29.1
      code: `isNaN('1.2');`,
      expectedError: 'no-restricted-globals',
    },
    {
      // 29.2
      code: `isFinite('2e3');`,
      expectedError: 'no-restricted-globals',
    },
  ],
);
