/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    poolOptions: {
      forks: {
        isolate: false, // Allow re-use of global scope since ESLint init takes so long
      },
    },
  },
});
