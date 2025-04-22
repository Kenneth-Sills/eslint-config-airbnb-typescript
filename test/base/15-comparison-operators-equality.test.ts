import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#comparison-operators--equality
 */
runTests(
  'comparison-operators-equality',
  ['base', 'react'],
  [
    {
      // 15.1
      code: `true == true;`,
      ruleName: 'eqeqeq',
    },
    {
      // 15.5
      code: outdent`
        switch (foo) {
          case 1:
            let x = 1;
            break;
          case 2:
            const y = 2;
            break;
          case 3:
            function f() {
              // ...
            }
            break;
          default:
            class C {}
        }
      `,
      ruleName: 'no-case-declarations',
    },
    {
      // 15.6
      code: outdent`
        const foo = maybe1 > maybe2
          ? "bar"
          : value1 > value2 ? "baz" : null;
      `,
      ruleName: 'no-nested-ternary',
    },
    {
      // 15.7
      code: 'const foo = a ? a : b;',
      ruleName: 'no-unneeded-ternary',
    },
    {
      // 15.8
      code: 'const foo = a && b < 0 || c > 0 || d + 1 === 0;',
      ruleName: 'no-mixed-operators',
    },
  ],
);
