import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#comments
 */
runTests(
  'comments',
  ['base', 'react'],
  [
    {
      // 18.3
      code: outdent`
        //is current tab
        const active = true;
      `,
      ruleName: 'spaced-comment', // TODO: should use @stylistic/spaced-comment
    },
  ],
);
