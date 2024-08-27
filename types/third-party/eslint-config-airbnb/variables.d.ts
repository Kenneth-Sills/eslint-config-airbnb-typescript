declare module 'eslint-config-airbnb-base/rules/variables' {
  const config: {
    readonly rules: {
      readonly 'init-declarations': 'off';
      readonly 'no-catch-shadow': 'off';
      readonly 'no-delete-var': 'error';
      readonly 'no-label-var': 'error';
      readonly 'no-restricted-globals': (
        | string
        | {
            name: string;
            message: string;
          }
      )[];
      readonly 'no-shadow': 'error';
      readonly 'no-shadow-restricted-names': 'error';
      readonly 'no-undef': 'error';
      readonly 'no-undef-init': 'error';
      readonly 'no-undefined': 'off';
      readonly 'no-unused-vars': readonly [
        'error',
        {
          readonly vars: 'all';
          readonly args: 'after-used';
          readonly ignoreRestSiblings: true;
        },
      ];
      readonly 'no-use-before-define': readonly [
        'error',
        {
          readonly functions: true;
          readonly classes: true;
          readonly variables: true;
        },
      ];
    };
  };

  export = config;
}
