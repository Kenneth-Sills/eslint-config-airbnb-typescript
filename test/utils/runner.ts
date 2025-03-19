import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import { baseConfig, reactConfig } from './test-eslint-configs';

const baseOptions: ESLint.LegacyOptions = {
  baseConfig,
  useEslintrc: false,
};

const reactOptions: ESLint.LegacyOptions = {
  baseConfig: reactConfig,
  useEslintrc: false,
};

const baseESLint = new ESLint(baseOptions as never);
const reactESLint = new ESLint(reactOptions as never);

const setupCode = (code: string, ruleGroup: string, testId: string) => {
  const filePath = `test/temp/${ruleGroup}/${testId}.ts`;
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, code, 'utf8');
  return filePath;
};

const hasRuleError = (results: ESLint.LintResult[], ruleId?: string) =>
  results.some((result) => result.messages.some((message) => message.ruleId === ruleId));

export interface RuleCase {
  code: string;
  expectedError?: string;
  skipReason?: string;
}

export const runTests = (ruleGroup: string, configTypes: string[], cases: RuleCase[]) => {
  const configs = configTypes.map((configType) => ({
    eslint: configType === 'react' ? reactESLint : baseESLint,
    configType,
  }));

  // eslint-disable-next-line no-restricted-syntax
  for (const { eslint, configType } of configs) {
    describe(`${ruleGroup} rules`, () => {
      describe(`using ${configType} config`, () => {
        // eslint-disable-next-line no-restricted-syntax
        for (const [index, { code, expectedError, skipReason }] of Object.entries(cases)) {
          const expectedResult = expectedError ? 'fail' : 'pass';
          const testId = `${index.padStart(2, '0')}-${expectedError ? expectedError.replaceAll('/', '-') : 'pass'}`;
          const testName = `should ${expectedResult} for ${testId}`;
          it(testName, async (t) => {
            if (skipReason) {
              t.skip(skipReason);
              return;
            }
            const filePath = setupCode(code, ruleGroup, testId);
            const results = await eslint.lintFiles(filePath);
            const hasExpectedError = hasRuleError(results, expectedError);
            if (expectedError) {
              expect(hasExpectedError).toBeTruthy();
            } else {
              expect(hasExpectedError).toBeFalsy();
            }
          });
        }
      });
    });
  }
};
