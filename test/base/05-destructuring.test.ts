import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master?tab=readme-ov-file#destructuring
 */
runTests(
  'destructuring',
  ['base', 'react'],
  [
    {
      // 5.1
      code: outdent`
          function getFullName(user) {
            const firstName = user.firstName;
            const lastName = user.lastName;

            return \`\${firstName} \${lastName}\`;
          }
        `,
      ruleName: 'prefer-destructuring',
    },
    {
      // 5.2
      code: outdent`
          const arr = [1, 2, 3, 4];
          const first = arr[0];
        `,
      ruleName: 'prefer-destructuring',
      skipReason: 'Disabled for VariableDeclarator arrays in airbnb-base', // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js#L125
    },
  ],
);
