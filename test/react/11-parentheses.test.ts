import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#parentheses
 */
runTests(
  'parentheses',
  ['react'],
  [
    {
      // Needed to add a class definition for airbnb example to work
      code: outdent`
        class Listing extends React.Component {
          render() {
            return <MyComponent variant="long body" foo="bar">
                    <MyChild />
                  </MyComponent>;
          }
        }
      `,
      ruleName: 'react/jsx-wrap-multilines',
    },
  ],
);
