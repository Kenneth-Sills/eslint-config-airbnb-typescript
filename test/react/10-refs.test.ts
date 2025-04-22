import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#refs
 */
runTests(
  'refs',
  ['react'],
  [
    {
      code: outdent`
        <Foo
          ref="myRef"
        />
      `,
      ruleName: 'react/no-string-refs',
    },
  ],
);
