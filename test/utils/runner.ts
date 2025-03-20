import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import outdent from 'outdent';
import { baseConfig, reactConfig } from './test-eslint-configs';

export type ConfigType = 'base' | 'react';

export interface RuleCase {
  code: string;
  ruleName: string;
  skipReason?: string;
  expectPass?: boolean;
}

interface TestCase extends RuleCase {
  id: string;
  ruleGroup: string;
  expectedResult: string;
  eslint: ESLint;
  configType: ConfigType;
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

const setupCode = (code: string, ruleGroup: string, testId: string, configType: string) => {
  const extension = configType === 'react' ? '.tsx' : '.ts';
  const filePath = `./test/temp/${ruleGroup}/${testId}-${configType}${extension}`;
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, code, 'utf8');
  return filePath;
};

const hasRuleError = (results: ESLint.LintResult[], ruleId?: string) =>
  results.some((result) => result.messages.some((message) => message.ruleId === ruleId));

const generateExpectMessage = (results: ESLint.LintResult[]) => {
  const messages: string[] = [];
  const ruleIds: string[] = [];
  results.forEach((result) => {
    result.messages.forEach((message) => {
      if (message.ruleId) {
        ruleIds.push(message.ruleId);
      } else {
        messages.push(message.message);
      }
    });
  });
  return outdent`
    Matched rules: ${ruleIds.length ? ruleIds.join('; ') : 'none'}
    Other messages: ${messages.length ? messages.join('; ') : 'none'}
  `;
};

const assembleTestCases = (
  cases: RuleCase[],
  ruleGroup: string,
  eslint: ESLint,
  configType: ConfigType,
) =>
  cases.map((testCase, index): TestCase => {
    const { ruleName, expectPass } = testCase;
    const expectedResult = expectPass ? 'pass' : 'fail';
    const testId = `${index.toString().padStart(2, '0')}-${ruleName.replaceAll('/', '-')}`;
    return {
      ...testCase,
      ruleGroup,
      id: testId,
      expectedResult,
      eslint,
      configType,
    };
  });

const runTestCases = (testCases: TestCase[]) => {
  it.for(testCases)(
    'should $expectedResult for $id',
    async ({ code, configType, eslint, expectPass, ruleName, id, ruleGroup, skipReason }, t) => {
      if (skipReason) {
        t.skip(skipReason);
        return;
      }
      const filePath = setupCode(code, ruleGroup, id, configType);
      const results = await eslint.lintFiles(filePath);
      const hasExpectedError = hasRuleError(results, ruleName);
      const message = generateExpectMessage(results);
      expect(hasExpectedError, message).toBe(!expectPass);
    },
  );
};

export const runTests = (ruleGroup: string, configTypes: ConfigType[], ruleCases: RuleCase[]) => {
  const configs = configTypes.map((configType) => ({
    eslint: configType === 'react' ? reactESLint : baseESLint,
    configType,
  }));

  describe(`${ruleGroup} rules`, () => {
    describe.for(configs)(`using $configType config`, ({ eslint, configType }) => {
      const testCases = assembleTestCases(ruleCases, ruleGroup, eslint, configType);
      runTestCases(testCases);
    });
  });
};
