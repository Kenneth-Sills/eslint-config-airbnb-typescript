const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#strings
 */
runTests(
  'strings',
  ['base', 'react'],
  [
    {
      // 6.1
      code: `const name = "Capt. Janeway";`,
      expectedError: '@stylistic/quotes',
    },
    {
      // 6.1
      code: `const name = \`Capt. Janeway\`;`,
      expectedError: '@stylistic/quotes',
    },
    {
      // 6.3
      code: outdent`
          function sayHi(name) {
            return 'How are you, ' + name + '?';
          }
        `,
      expectedError: 'prefer-template',
    },
    {
      // 6.3
      code: outdent`
          function sayHi(name) {
            return \`How are you, \${ name }?\`;
          }
        `,
      expectedError: 'template-curly-spacing',
    },
    {
      // 6.4
      code: `eval('console.log("foo")');`,
      expectedError: 'no-eval',
    },
    {
      // 6.5
      code: `const foo = '\\'this\\' \\i\\s \\"quoted\\"';`,
      expectedError: 'no-useless-escape',
    },
  ],
);
