declare module 'eslint-config-airbnb-base/rules/imports' {
  const config: {
    readonly env: {
      readonly es6: true;
    };
    readonly parserOptions: {
      readonly ecmaVersion: 6;
      readonly sourceType: 'module';
    };
    readonly plugins: readonly ['import'];
    readonly settings: {
      readonly 'import/resolver': {
        readonly node: {
          readonly extensions: readonly ['.mjs', '.js', '.json'];
        };
      };
      readonly 'import/extensions': readonly ['.js', '.mjs', '.jsx'];
      readonly 'import/core-modules': readonly [];
      readonly 'import/ignore': readonly [
        'node_modules',
        '\\.(coffee|scss|css|less|hbs|svg|json)$',
      ];
    };
    readonly rules: {
      readonly 'import/no-unresolved': readonly [
        'error',
        {
          readonly commonjs: true;
          readonly caseSensitive: true;
        },
      ];
      readonly 'import/named': 'error';
      readonly 'import/default': 'off';
      readonly 'import/namespace': 'off';
      readonly 'import/export': 'error';
      readonly 'import/no-named-as-default': 'error';
      readonly 'import/no-named-as-default-member': 'error';
      readonly 'import/no-deprecated': 'off';
      readonly 'import/no-extraneous-dependencies': readonly [
        'error',
        {
          readonly devDependencies: readonly [
            'test/**',
            'tests/**',
            'spec/**',
            '**/__tests__/**',
            '**/__mocks__/**',
            'test.{js,jsx}',
            'test-*.{js,jsx}',
            '**/*{.,_}{test,spec}.{js,jsx}',
            '**/jest.config.js',
            '**/jest.setup.js',
            '**/vue.config.js',
            '**/webpack.config.js',
            '**/webpack.config.*.js',
            '**/rollup.config.js',
            '**/rollup.config.*.js',
            '**/gulpfile.js',
            '**/gulpfile.*.js',
            '**/Gruntfile{,.js}',
            '**/protractor.conf.js',
            '**/protractor.conf.*.js',
            '**/karma.conf.js',
            '**/.eslintrc.js',
          ];
          readonly optionalDependencies: false;
        },
      ];
      readonly 'import/no-mutable-exports': 'error';
      readonly 'import/no-commonjs': 'off';
      readonly 'import/no-amd': 'error';
      readonly 'import/no-nodejs-modules': 'off';
      readonly 'import/first': 'error';
      readonly 'import/imports-first': 'off';
      readonly 'import/no-duplicates': 'error';
      readonly 'import/no-namespace': 'off';
      readonly 'import/extensions': readonly [
        'error',
        'ignorePackages',
        {
          readonly js: 'never';
          readonly mjs: 'never';
          readonly jsx: 'never';
        },
      ];
      readonly 'import/order': readonly [
        'error',
        {
          readonly groups: readonly [readonly ['builtin', 'external', 'internal']];
        },
      ];
      readonly 'import/newline-after-import': 'error';
      readonly 'import/prefer-default-export': 'error';
      readonly 'import/no-restricted-paths': 'off';
      readonly 'import/max-dependencies': readonly [
        'off',
        {
          readonly max: 10;
        },
      ];
      readonly 'import/no-absolute-path': 'error';
      readonly 'import/no-dynamic-require': 'error';
      readonly 'import/no-internal-modules': readonly [
        'off',
        {
          readonly allow: readonly [];
        },
      ];
      readonly 'import/unambiguous': 'off';
      readonly 'import/no-webpack-loader-syntax': 'error';
      readonly 'import/no-unassigned-import': 'off';
      readonly 'import/no-named-default': 'error';
      readonly 'import/no-anonymous-default-export': readonly [
        'off',
        {
          readonly allowArray: false;
          readonly allowArrowFunction: false;
          readonly allowAnonymousClass: false;
          readonly allowAnonymousFunction: false;
          readonly allowLiteral: false;
          readonly allowObject: false;
        },
      ];
      readonly 'import/exports-last': 'off';
      readonly 'import/group-exports': 'off';
      readonly 'import/no-default-export': 'off';
      readonly 'import/no-named-export': 'off';
      readonly 'import/no-self-import': 'error';
      readonly 'import/no-cycle': readonly [
        'error',
        {
          readonly maxDepth: '∞';
        },
      ];
      readonly 'import/no-useless-path-segments': readonly [
        'error',
        {
          readonly commonjs: true;
        },
      ];
      readonly 'import/dynamic-import-chunkname': readonly [
        'off',
        {
          readonly importFunctions: readonly [];
          readonly webpackChunknameFormat: '[0-9a-zA-Z-_/.]+';
        },
      ];
      readonly 'import/no-relative-parent-imports': 'off';
      readonly 'import/no-unused-modules': readonly [
        'off',
        {
          readonly ignoreExports: readonly [];
          readonly missingExports: true;
          readonly unusedExports: true;
        },
      ];
      readonly 'import/no-import-module-exports': readonly [
        'error',
        {
          readonly exceptions: readonly [];
        },
      ];
      readonly 'import/no-relative-packages': 'error';
      readonly 'import/consistent-type-specifier-style': readonly ['off', 'prefer-inline'];
      readonly 'import/no-empty-named-blocks': 'off';
    };
  };

  export = config;
}
