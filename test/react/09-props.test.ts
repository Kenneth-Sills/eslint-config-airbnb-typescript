import outdent from 'outdent';
import { runTests } from '../utils/runner';

/**
 * https://github.com/airbnb/javascript/tree/master/react#props
 */
runTests(
  'props',
  ['react'],
  [
    {
      code: outdent`
        <Foo
          hidden={true}
        />
      `,
      ruleName: 'react/jsx-boolean-value',
    },
    {
      code: `<img src="hello.jpg" />`,
      ruleName: 'jsx-a11y/alt-text',
    },
    {
      code: `<img src="hello.jpg" alt="Picture of me waving hello" />`,
      ruleName: 'jsx-a11y/img-redundant-alt',
    },
    {
      code: `<div role="datepicker" />`,
      ruleName: 'jsx-a11y/aria-role',
    },
    {
      code: `<div accessKey="h" />`,
      ruleName: 'jsx-a11y/no-access-key',
    },
    {
      code: outdent`
        {todos.map((todo, index) =>
          <Todo
            {...todo}
            key={index}
          />
        )}
      `,
      ruleName: 'react/no-array-index-key',
    },
  ],
);
