import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#standard-library
 */
runTests(
  'standard-library',
  ['base', 'react'],
  [
    {
      // 29.1
      code: `isNaN('1.2');`,
      ruleName: 'no-restricted-globals',
    },
    {
      // 29.2
      code: `isFinite('2e3');`,
      ruleName: 'no-restricted-globals',
    },
  ],
);
