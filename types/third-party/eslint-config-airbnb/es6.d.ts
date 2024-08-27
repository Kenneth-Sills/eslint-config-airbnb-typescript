declare module 'eslint-config-airbnb-base/rules/es6' {
  const config: {
    readonly env: {
      readonly es6: true;
    };
    readonly parserOptions: {
      readonly ecmaVersion: 6;
      readonly sourceType: 'module';
      readonly ecmaFeatures: {
        readonly generators: false;
        readonly objectLiteralDuplicateProperties: false;
      };
    };
    readonly rules: {
      readonly 'arrow-body-style': readonly [
        'error',
        'as-needed',
        {
          readonly requireReturnForObjectLiteral: false;
        },
      ];
      readonly 'arrow-parens': readonly ['error', 'always'];
      readonly 'arrow-spacing': readonly [
        'error',
        {
          readonly before: true;
          readonly after: true;
        },
      ];
      readonly 'constructor-super': 'error';
      readonly 'generator-star-spacing': readonly [
        'error',
        {
          readonly before: false;
          readonly after: true;
        },
      ];
      readonly 'no-class-assign': 'error';
      readonly 'no-confusing-arrow': readonly [
        'error',
        {
          readonly allowParens: true;
        },
      ];
      readonly 'no-const-assign': 'error';
      readonly 'no-dupe-class-members': 'error';
      readonly 'no-duplicate-imports': 'off';
      readonly 'no-new-symbol': 'error';
      readonly 'no-restricted-exports': readonly [
        'error',
        {
          readonly restrictedNamedExports: readonly ['default', 'then'];
        },
      ];
      readonly 'no-restricted-imports': readonly [
        'off',
        {
          readonly paths: readonly [];
          readonly patterns: readonly [];
        },
      ];
      readonly 'no-this-before-super': 'error';
      readonly 'no-useless-computed-key': 'error';
      readonly 'no-useless-constructor': 'error';
      readonly 'no-useless-rename': readonly [
        'error',
        {
          readonly ignoreDestructuring: false;
          readonly ignoreImport: false;
          readonly ignoreExport: false;
        },
      ];
      readonly 'no-var': 'error';
      readonly 'object-shorthand': readonly [
        'error',
        'always',
        {
          readonly ignoreConstructors: false;
          readonly avoidQuotes: true;
        },
      ];
      readonly 'prefer-arrow-callback': readonly [
        'error',
        {
          readonly allowNamedFunctions: false;
          readonly allowUnboundThis: true;
        },
      ];
      readonly 'prefer-const': readonly [
        'error',
        {
          readonly destructuring: 'any';
          readonly ignoreReadBeforeAssign: true;
        },
      ];
      readonly 'prefer-destructuring': readonly [
        'error',
        {
          readonly VariableDeclarator: {
            readonly array: false;
            readonly object: true;
          };
          readonly AssignmentExpression: {
            readonly array: true;
            readonly object: false;
          };
        },
        {
          readonly enforceForRenamedProperties: false;
        },
      ];
      readonly 'prefer-numeric-literals': 'error';
      readonly 'prefer-reflect': 'off';
      readonly 'prefer-rest-params': 'error';
      readonly 'prefer-spread': 'error';
      readonly 'prefer-template': 'error';
      readonly 'require-yield': 'error';
      readonly 'rest-spread-spacing': readonly ['error', 'never'];
      readonly 'sort-imports': readonly [
        'off',
        {
          readonly ignoreCase: false;
          readonly ignoreDeclarationSort: false;
          readonly ignoreMemberSort: false;
          readonly memberSyntaxSortOrder: readonly ['none', 'all', 'multiple', 'single'];
        },
      ];
      readonly 'symbol-description': 'error';
      readonly 'template-curly-spacing': 'error';
      readonly 'yield-star-spacing': readonly ['error', 'after'];
    };
  };

  export = config;
}
