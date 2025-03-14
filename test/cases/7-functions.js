const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#objects
 */
runTests(
  'functions',
  ['base', 'react'],
  [
    {
      // 7.1
      code: outdent`
        function foo() {
          return true;
        }
      `,
      expectedError: 'func-style',
      skip: true,
    },
    {
      // 7.1
      code: outdent`
        const foo = function () {
          return true;
        }
      `,
      expectedError: 'func-names',
    },
  ],
);
