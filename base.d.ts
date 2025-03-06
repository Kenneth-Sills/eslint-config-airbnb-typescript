import type { Linter } from 'eslint';

declare const eslintConfigAirbnbTypescript: Linter.BaseConfig & {
  readonly configs: {
    base: Linter.FlatConfig[];
  };
};

export = eslintConfigAirbnbTypescript;
