import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master?tab=readme-ov-file#arrow-functions
 */
runTests(
  'arrow-functions',
  ['base', 'react'],
  [
    {
      // 8.1
      code: outdent`
        [1, 2, 3].map(function (x) {
          const y = x + 1;
          return x * y;
        });
      `,
      expectedError: 'prefer-arrow-callback',
    },
    {
      // 8.1
      code: '(a)=>{}',
      expectedError: 'arrow-spacing', // TODO: should use @stylistic/arrow-spacing
    },
    {
      // 8.2
      code: outdent`
        function foo(callback) {
          callback();
        }
        foo(() => bool = true);
      `,
      expectedError: 'no-return-assign', // Not explicitly in docs, but describes the rule
    },
    {
      // 8.2
      // Airbnb's example doesn't get caught by the rule
      code: outdent`
        const a = () => {
          return true;
        }
      `,
      expectedError: 'arrow-body-style',
    },
    {
      // 8.4
      code: '[1, 2, 3].map(x => x * x);',
      expectedError: 'arrow-parens', // TODO: should use @stylistic/arrow-parens
    },
    {
      // 8.5
      code: 'const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;',
      expectedError: 'no-confusing-arrow', // TODO: should use @stylistic/no-confusing-arrow
    },
    {
      // 8.5
      code: outdent`
        (foo) =>
          bar;
      `,
      expectedError: 'implicit-arrow-linebreak', // TODO: should use @stylistic/implicit-arrow-linebreak
    },
  ],
);
