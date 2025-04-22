import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#type-casting--coercion
 */
runTests(
  'type-casting-coercion',
  ['base', 'react'],
  [
    {
      // 22.2
      code: 'const totalScore = new String(this.reviewScore);',
      ruleName: 'no-new-wrappers',
    },
    {
      // 22.3
      code: outdent`
        const inputValue = '4';
        const val = new Number(inputValue);
      `,
      ruleName: 'no-new-wrappers',
    },
    {
      // 22.3
      code: outdent`
        const inputValue = '4';
        const val = parseInt(inputValue);
      `,
      ruleName: 'radix',
    },
    {
      // 22.6
      code: outdent`
        const age = 0;
        const hasAge = new Boolean(age);
      `,
      ruleName: 'no-new-wrappers',
    },
  ],
);
