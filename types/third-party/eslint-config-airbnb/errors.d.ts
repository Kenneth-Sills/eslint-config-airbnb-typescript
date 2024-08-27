declare module 'eslint-config-airbnb-base/rules/errors' {
  const config: {
    rules: {
      readonly 'for-direction': 'error';
      readonly 'getter-return': readonly [
        'error',
        {
          readonly allowImplicit: true;
        },
      ];
      readonly 'no-async-promise-executor': 'error';
      readonly 'no-await-in-loop': 'error';
      readonly 'no-compare-neg-zero': 'error';
      readonly 'no-cond-assign': readonly ['error', 'always'];
      readonly 'no-console': 'warn';
      readonly 'no-constant-binary-expression': 'off';
      readonly 'no-constant-condition': 'warn';
      readonly 'no-control-regex': 'error';
      readonly 'no-debugger': 'error';
      readonly 'no-dupe-args': 'error';
      readonly 'no-dupe-else-if': 'error';
      readonly 'no-dupe-keys': 'error';
      readonly 'no-duplicate-case': 'error';
      readonly 'no-empty': 'error';
      readonly 'no-empty-character-class': 'error';
      readonly 'no-ex-assign': 'error';
      readonly 'no-extra-boolean-cast': 'error';
      readonly 'no-extra-parens': readonly [
        'off',
        'all',
        {
          readonly conditionalAssign: true;
          readonly nestedBinaryExpressions: false;
          readonly returnAssign: false;
          readonly ignoreJSX: 'all';
          readonly enforceForArrowConditionals: false;
        },
      ];
      readonly 'no-extra-semi': 'error';
      readonly 'no-func-assign': 'error';
      readonly 'no-import-assign': 'error';
      readonly 'no-inner-declarations': 'error';
      readonly 'no-invalid-regexp': 'error';
      readonly 'no-irregular-whitespace': 'error';
      readonly 'no-loss-of-precision': 'error';
      readonly 'no-misleading-character-class': 'error';
      readonly 'no-obj-calls': 'error';
      readonly 'no-new-native-nonconstructor': 'off';
      readonly 'no-promise-executor-return': 'error';
      readonly 'no-prototype-builtins': 'error';
      readonly 'no-regex-spaces': 'error';
      readonly 'no-setter-return': 'error';
      readonly 'no-sparse-arrays': 'error';
      readonly 'no-template-curly-in-string': 'error';
      readonly 'no-unexpected-multiline': 'error';
      readonly 'no-unreachable': 'error';
      readonly 'no-unreachable-loop': readonly [
        'error',
        {
          readonly ignore: readonly [];
        },
      ];
      readonly 'no-unsafe-finally': 'error';
      readonly 'no-unsafe-negation': 'error';
      readonly 'no-unsafe-optional-chaining': readonly [
        'error',
        {
          readonly disallowArithmeticOperators: true;
        },
      ];
      readonly 'no-unused-private-class-members': 'off';
      readonly 'no-useless-backreference': 'error';
      readonly 'no-negated-in-lhs': 'off';
      readonly 'require-atomic-updates': 'off';
      readonly 'use-isnan': 'error';
      readonly 'valid-jsdoc': 'off';
      readonly 'valid-typeof': readonly [
        'error',
        {
          readonly requireStringLiterals: true;
        },
      ];
    };
  };

  export = config;
}
