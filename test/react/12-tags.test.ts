import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#tags
 */
runTests(
  'tags',
  ['react'],
  [
    {
      code: `<Foo variant="stuff"></Foo>`,
      ruleName: 'react/self-closing-comp',
    },
    {
      code: outdent`
        <Foo
          bar="bar"
          baz="baz" />
      `,
      ruleName: 'react/jsx-closing-bracket-location',
    },
  ],
);
