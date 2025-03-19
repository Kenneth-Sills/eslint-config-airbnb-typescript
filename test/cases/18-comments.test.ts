import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#comments
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
      expectedError: 'spaced-comment', // TODO: should use @stylistic/spaced-comment
    },
  ],
);
