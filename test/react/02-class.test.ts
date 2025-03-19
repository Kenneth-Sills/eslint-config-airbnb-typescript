import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#class-vs-reactcreateclass-vs-stateless
 */
runTests(
  'class',
  ['react'],
  [
    {
      // Had to change React.createClass to createReactClass to hit the rule
      code: outdent`
        const Listing = createReactClass({
          render() {
            return <div>{this.state.hello}</div>;
          }
        });
      `,
      ruleName: 'react/prefer-es6-class',
    },
    {
      code: outdent`
          class Listing extends React.Component {
            render() {
              return <div>{this.props.hello}</div>;
            }
          }
        `,
      ruleName: 'react/prefer-stateless-function',
    },
  ],
);
