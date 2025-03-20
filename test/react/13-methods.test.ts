import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#methods
 */
runTests(
  'methods',
  ['react'],
  [
    {
      // The airbnb example does not work for this rule
      code: outdent`
        <Foo onClick={this._handleClick.bind(this)}></Foo>
      `,
      ruleName: 'react/jsx-no-bind',
    },
    {
      // Added a class wrapper for the airbnb example to pass
      code: outdent`
        class Foo extends React.Component {
          render() {
            (<div />);
          }
        }
      `,
      ruleName: 'react/require-render-return',
    },
  ],
);
