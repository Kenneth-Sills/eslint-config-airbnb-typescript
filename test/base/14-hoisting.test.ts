import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#hoisting
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
      ruleName: '@typescript-eslint/no-use-before-define',
    },
  ],
);
