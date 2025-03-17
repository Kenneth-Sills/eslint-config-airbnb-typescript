const { describe, it } = require('node:test');
const { ESLint } = require('eslint');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const baseConfig = require('./test-base-config');
const reactConfig = require('./test-react-config');

const baseESLint = new ESLint({ overrideConfig: baseConfig });
const reactESLint = new ESLint({ overrideConfig: reactConfig });

const setupCode = (code, testId) => {
  const filePath = `test/temp/${testId}.ts`;
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, code, 'utf8');
  return filePath;
};

const hasRuleError = (ruleId, results) =>
  results.some((result) => result.messages.some((message) => message.ruleId === ruleId));

const runTests = (ruleGroup, configTypes, cases) => {
  const configs = configTypes.map((configType) => ({
    eslint: configType === 'react' ? reactESLint : baseESLint,
    configType,
  }));

  for (const { eslint, configType } of configs) {
    describe(`${ruleGroup} rules`, () => {
      describe(`using ${configType} config`, () => {
        // eslint-disable-next-line no-restricted-syntax
        for (const [index, { code, expectedError, skipReason }] of Object.entries(cases)) {
          const expectedResult = expectedError ? 'fail' : 'pass';
          const testId = `${ruleGroup}-${index}`;
          const testName = `should ${expectedResult} for ${testId}`;
          it(testName, async (t) => {
            if (skipReason) {
              return t.skip(skipReason);
            }
            const filePath = setupCode(code, testId);
            const results = await eslint.lintFiles(filePath);
            const hasExpectedError = hasRuleError(expectedError, results);
            if (expectedError) {
              assert.strictEqual(
                hasExpectedError,
                true,
                `Expected error ${expectedError} for ${testId}`,
              );
            } else {
              assert.strictEqual(hasExpectedError, false, `Expected no errors for ${testId}`);
            }
          });
        }
      });
    });
  }
};

module.exports = runTests;
