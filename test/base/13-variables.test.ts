import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#variables
 */
runTests(
  'variables',
  ['base', 'react'],
  [
    {
      // 13.1
      code: 'superPower = new SuperPower();',
      ruleName: 'no-undef',
      skipReason: 'covered by typescript',
    },
    {
      // 13.2
      code: outdent`
        const items = getItems(),
          goSportsTeam = true,
          dragonball = 'z';
      `,
      ruleName: 'one-var',
    },
    {
      // 13.5
      code: 'let a = b = c = 1;',
      ruleName: 'no-multi-assign',
    },
    {
      // 13.6
      code: outdent`
        let num = 1;
        num++;
      `,
      ruleName: 'no-plusplus',
    },
    {
      // 13.7
      code: outdent`
        const foo =
          superLongLongLongLongLongLongLongLongFunctionName();
      `,
      ruleName: 'operator-linebreak',
    },
    {
      // 13.8
      code: outdent`
        const some_unused_var = 42;
      `,
      ruleName: '@typescript-eslint/no-unused-vars',
    },
  ],
);
