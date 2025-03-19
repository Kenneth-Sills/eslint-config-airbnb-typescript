import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#type-casting--coercion
 */
runTests(
  'type-casting-coercion',
  ['base', 'react'],
  [
    {
      // 22.2
      code: 'const totalScore = new String(this.reviewScore);',
      expectedError: 'no-new-wrappers',
    },
    {
      // 22.3
      code: outdent`
        const inputValue = '4';
        const val = new Number(inputValue);
      `,
      expectedError: 'no-new-wrappers',
    },
    {
      // 22.3
      code: outdent`
        const inputValue = '4';
        const val = parseInt(inputValue);
      `,
      expectedError: 'radix',
    },
    {
      // 22.6
      code: outdent`
        const age = 0;
        const hasAge = new Boolean(age);
      `,
      expectedError: 'no-new-wrappers',
    },
  ],
);
