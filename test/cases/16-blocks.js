const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#blocks
 */
runTests(
  'blocks',
  ['base', 'react'],
  [
    {
      // 16.1
      code: outdent`
        if (test)
          return false;
      `,
      expectedError: 'nonblock-statement-body-position', // TODO: should use @stylistic/nonblock-statement-body-position
    },
    {
      // 16.2
      code: outdent`
        if (test) {
          thing1();
          thing2();
        }
        else {
          thing3();
        }
      `,
      expectedError: '@stylistic/brace-style',
    },
    {
      // 16.3
      code: outdent`
        function foo() {
          if (x) {
            return x;
          } else {
            return y;
          }
        }
      `,
      expectedError: 'no-else-return',
    },
  ],
);
