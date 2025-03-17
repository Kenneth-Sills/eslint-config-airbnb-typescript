const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#variables
 */
runTests(
  'variables',
  ['base', 'react'],
  [
    {
      // 13.1
      code: 'superPower = new SuperPower();',
      expectedError: 'no-undef',
      skipReason: 'covered by typescript',
    },
    {
      // 13.2
      code: outdent`
        const items = getItems(),
          goSportsTeam = true,
          dragonball = 'z';
      `,
      expectedError: 'one-var',
    },
    {
      // 13.5
      code: 'let a = b = c = 1;',
      expectedError: 'no-multi-assign',
    },
    {
      // 13.6
      code: outdent`
        let num = 1;
        num++;
      `,
      expectedError: 'no-plusplus',
    },
    {
      // 13.7
      code: outdent`
        const foo =
          superLongLongLongLongLongLongLongLongFunctionName();
      `,
      expectedError: 'operator-linebreak',
    },
    {
      // 13.8
      code: outdent`
        const some_unused_var = 42;
      `,
      expectedError: '@typescript-eslint/no-unused-vars',
    },
  ],
);
