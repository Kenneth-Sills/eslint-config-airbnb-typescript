import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#ordering
 */
runTests(
  'ordering',
  ['react'],
  [
    {
      code: outdent`
        class Hello extends React.Component {
          render() {
            return <div>Hello</div>;
          }
          static displayName = 'Hello';
        }
      `,
      ruleName: 'react/sort-comp',
    },
  ],
);
