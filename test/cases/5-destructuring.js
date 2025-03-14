const outdent = require('outdent');
const runTests = require('../utils/runner');

/**
 * https://github.com/airbnb/javascript?tab=readme-ov-file#objects
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
      expectedError: 'prefer-destructuring',
    },
    {
      // 5.2
      code: outdent`
          const arr = [1, 2, 3, 4];
          const first = arr[0];
        `,
      expectedError: 'prefer-destructuring',
      skip: true,
    },
  ],
);
