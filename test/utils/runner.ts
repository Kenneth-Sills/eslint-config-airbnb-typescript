import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import { baseConfig, reactConfig } from './test-eslint-configs';

export interface RuleCase {
  code: string;
  expectedError?: string;
  skipReason?: string;
}

interface TestCase extends RuleCase {
  id: string;
  ruleGroup: string;
  expectedResult: string;
  eslint: ESLint;
}

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

const assembleTestCases = (cases: RuleCase[], ruleGroup: string, eslint: ESLint) =>
  cases.map((testCase, index): TestCase => {
    const { expectedError } = testCase;
    const expectedResult = expectedError ? 'fail' : 'pass';
    const testId = `${index.toString().padStart(2, '0')}-${expectedError ? expectedError.replaceAll('/', '-') : 'pass'}`;
    return {
      ...testCase,
      ruleGroup,
      id: testId,
      expectedResult,
      eslint,
    };
  });

const runTestCases = (testCases: TestCase[]) => {
  it.for(testCases)(
    'should $expectedResult for $id',
    async ({ code, eslint, expectedError, id, ruleGroup, skipReason }, t) => {
      if (skipReason) {
        t.skip(skipReason);
        return;
      }
      const filePath = setupCode(code, ruleGroup, id);
      const results = await eslint.lintFiles(filePath);
      const hasExpectedError = hasRuleError(results, expectedError);
      if (expectedError) {
        expect(hasExpectedError).toBe(true);
      } else {
        expect(hasExpectedError).toBe(false);
      }
    },
  );
};

export const runTests = (ruleGroup: string, configTypes: string[], ruleCases: RuleCase[]) => {
  const configs = configTypes.map((configType) => ({
    eslint: configType === 'react' ? reactESLint : baseESLint,
    configType,
  }));

  describe(`${ruleGroup} rules`, () => {
    describe.for(configs)(`using $configType config`, ({ eslint }) => {
      const testCases = assembleTestCases(ruleCases, ruleGroup, eslint);
      runTestCases(testCases);
    });
  });
};
