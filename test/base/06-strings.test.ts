import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/blob/master/README.md#strings
 */
runTests(
  'strings',
  ['base', 'react'],
  [
    {
      // 6.1
      code: `const name = "Capt. Janeway";`,
      ruleName: '@stylistic/quotes',
    },
    {
      // 6.1
      code: `const name = \`Capt. Janeway\`;`,
      ruleName: '@stylistic/quotes',
    },
    {
      // 6.3
      code: outdent`
          function sayHi(name) {
            return 'How are you, ' + name + '?';
          }
        `,
      ruleName: 'prefer-template',
    },
    {
      // 6.3
      code: outdent`
          function sayHi(name) {
            return \`How are you, \${ name }?\`;
          }
        `,
      ruleName: 'template-curly-spacing',
    },
    {
      // 6.4
      code: `eval('console.log("foo")');`,
      ruleName: 'no-eval',
    },
    {
      // 6.5
      code: `const foo = '\\'this\\' \\i\\s \\"quoted\\"';`,
      ruleName: 'no-useless-escape',
    },
  ],
);
