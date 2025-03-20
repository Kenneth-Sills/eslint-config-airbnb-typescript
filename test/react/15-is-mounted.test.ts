import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#ismounted
 */
runTests(
  'is-mounted',
  ['react'],
  [
    {
      code: outdent`
        var Hello = createReactClass({
          handleClick: function() {
            setTimeout(function() {
              if (this.isMounted()) {
                return;
              }
            });
          },
          render: function() {
            return <div onClick={this.handleClick.bind(this)}>Hello</div>;
          }
        });
      `,
      ruleName: 'react/no-is-mounted',
    },
  ],
);
