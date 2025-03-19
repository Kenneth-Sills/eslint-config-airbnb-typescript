import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#semicolons
 */
runTests(
  'semicolons',
  ['base', 'react'],
  [
    {
      // 21.1
      code: 'const luke = {}',
      ruleName: '@stylistic/semi',
    },
  ],
);
