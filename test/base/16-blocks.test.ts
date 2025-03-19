import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#blocks
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
      ruleName: 'nonblock-statement-body-position', // TODO: should use @stylistic/nonblock-statement-body-position
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
      ruleName: '@stylistic/brace-style',
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
      ruleName: 'no-else-return',
    },
  ],
);
