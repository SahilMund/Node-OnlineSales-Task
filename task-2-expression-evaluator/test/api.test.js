const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const axios = require("axios");
const evaluateExpressions = require("..");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("evaluateExpressions", () => {
  it("should evaluate expressions and return results", async () => {
    const expressions = [
      "2 * 4 * 4",
      "5 / (7 - 5)",
      "sqrt(5^2 - 4^2)",
      "sqrt(-3^2 - 4^2)",
      "end",
    ];
    const expectedResults = ["32", "2.5", "3", "5i"];

    const result = await evaluateExpressions(expressions);
    for (let i = 0; i < expressions.length; i++) {
      const expression = expressions[i];
      const expectedResult = expectedResults[i];

      if (expression === "end") {
        break;
      }

      expect(result[i]).to.equal(`${expression} => ${expectedResult}`);
    }
  }).timeout(10000);

  it("should evaluate expressions and return errors", async () => {
    const expressions = [
      "2 * 4 * 4",
      "5 / (7 - 5)",
      "sqrt(5^2 - 4^2)",
      "sqrt(-3^2 - 4^2)",
      "end",
    ];
    const expectedResults = ["23", "2.905", "3222", "5i3"];

    const result = await evaluateExpressions(expressions);
    for (let i = 0; i < expressions.length; i++) {
      const expression = expressions[i];
      const expectedResult = expectedResults[i];

      if (expression === "end") {
        break;
      }

      expect(result[i]).to.not.equal(`${expression} => ${expectedResult}`);
    }
  }).timeout(10000);


});
