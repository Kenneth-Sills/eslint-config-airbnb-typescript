const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#references
 */
runTests(
  'references',
  ['base', 'react'],
  [
    {
      // 2.1
      code: 'let a = 1;',
      expectedError: 'prefer-const',
    },
    {
      // 2.1
      code: outdent`
          const a = 1;
          a = 1;
        `,
      expectedError: 'no-const-assign',
      skip: true, // covered by typescript
    },
    {
      // 2.2
      code: 'var a = 1;',
      expectedError: 'no-var',
    },
  ],
);
