const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript/tree/master?tab=readme-ov-file#arrays
 */
runTests(
  'arrays',
  ['base', 'react'],
  [
    {
      // 4.1
      code: 'const items = new Array();',
      expectedError: '@typescript-eslint/no-array-constructor',
    },
    {
      // 4.7
      code: outdent`
          [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
            const flatten = acc.concat(item);
          });
        `,
      expectedError: 'array-callback-return',
    },
  ],
);
