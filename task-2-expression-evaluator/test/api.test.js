const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const axios = require("axios");
const evaluateExpressions = require("..");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Evaluate Mathematical Expressions", () => {
  // Define all the expressions which will be evaluated
  const expressions = [
    "2 * 4 * 4",
    "5 / (7 - 5)",
    "sqrt(5^2 - 4^2)",
    "sqrt(-3^2 - 4^2)",
    "end",
  ];

  // Define the expected results of each expressions
  const expectedResults = ["32", "2.5", "3", "5i"];

  it("should evaluate expressions and verify the actual output is equals to correct expected output", async () => {
    // Call the evaluateExpressions function and get the result, so that we can compare it with the expected output

    const result = await evaluateExpressions(expressions);

    // Looping over each expression and comparing the actual and expected output
    for (let i = 0; i < expressions.length; i++) {
      const expression = expressions[i];
      const expectedResult = expectedResults[i];

      if (expression === "end") {
        break;
      }

      // Assert that the result matches the expected format

      expect(result[i]).to.equal(`${expression} => ${expectedResult}`);
    }
  }).timeout(10000);

  it("should evaluate expressions and verify the actual output is not equal to incorrect expected output", async () => {
    const inCorrectResults = ["23", "2.905", "3222", "5i3"];

    const result = await evaluateExpressions(expressions);
    for (let i = 0; i < expressions.length; i++) {
      const expression = expressions[i];
      const expectedResult = inCorrectResults[i];

      if (expression === "end") {
        break;
      }

      // Assert that the result does not match the incorrect expected format

      expect(result[i]).to.not.equal(`${expression} => ${expectedResult}`);
    }
  }).timeout(10000);
});
