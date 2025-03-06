import type { Linter } from 'eslint';

declare const eslintConfigAirbnbTypescript: Linter.BaseConfig & {
  readonly configs: {
    react: Linter.FlatConfig[];
  };
};

export = eslintConfigAirbnbTypescript;
