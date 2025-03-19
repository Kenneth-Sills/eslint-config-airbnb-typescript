import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#semicolons
 */
runTests(
  'semicolons',
  ['base', 'react'],
  [
    {
      // 21.1
      code: 'const luke = {}',
      expectedError: '@stylistic/semi',
    },
  ],
);
