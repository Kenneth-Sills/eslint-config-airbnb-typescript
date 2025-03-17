const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#hoisting
 */
runTests(
  'hoisting',
  ['base', 'react'],
  [
    {
      // 14.5
      code: outdent`
        console.log(a);
        var a = 10;
      `,
      expectedError: '@typescript-eslint/no-use-before-define',
    },
  ],
);
