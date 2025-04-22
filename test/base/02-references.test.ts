import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#references
 */
runTests(
  'references',
  ['base', 'react'],
  [
    {
      // 2.1
      code: 'let a = 1;',
      ruleName: 'prefer-const',
    },
    {
      // 2.1
      code: outdent`
          const a = 1;
          a = 1;
        `,
      ruleName: 'no-const-assign',
      skipReason: 'covered by typescript',
    },
    {
      // 2.2
      code: 'var a = 1;',
      ruleName: 'no-var',
    },
  ],
);
