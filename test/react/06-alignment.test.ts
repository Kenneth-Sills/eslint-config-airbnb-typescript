import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#alignment
 */
runTests(
  'alignment',
  ['react'],
  [
    {
      code: outdent`
        <Foo superLongParam="bar"
            anotherSuperLongParam="baz" />
     `,
      ruleName: 'react/jsx-closing-bracket-location',
    },
    {
      // No airbnb example for this
      code: outdent`
        <Hello>
          marklar
          </Hello>  
      `,
      ruleName: 'react/jsx-closing-tag-location',
    },
  ],
);
