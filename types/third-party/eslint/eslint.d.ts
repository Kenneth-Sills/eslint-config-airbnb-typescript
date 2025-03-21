/* eslint-disable import/prefer-default-export */
declare module 'eslint/use-at-your-own-risk' {
  import type { ESLint } from 'eslint';

  /**
   * This isn't accurate, but it's close enough for the test runner.
   */
  export class FlatESLint extends ESLint {}
}
