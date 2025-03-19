import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#properties
 */
runTests(
  'properties',
  ['base', 'react'],
  [
    {
      // 12.1
      code: outdent`
        const luke = {
          jedi: true,
          age: 28,
        };
        const isJedi = luke['jedi'];
      `,
      expectedError: '@typescript-eslint/dot-notation',
    },
    {
      // 12.3
      code: 'const binary = Math.pow(2, 10);',
      expectedError: 'prefer-exponentiation-operator',
    },
  ],
);
