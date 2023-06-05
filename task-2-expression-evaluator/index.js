const getExpressionResult = require("./api");

const evaluateExpressions = async (expressions) => {
  // For storing the result of each expression after it has been evaluated by the API
  let results = [];
  for (const expression of expressions) {
    if (expression === "end") {
      return results;
    }
    try {
      // Fetching the result of the expression
      const result = await getExpressionResult(expression);
      results.push(`${expression} => ${result}`);
    } catch (error) {
      results.push(`${expression} => Error: ${error.message}`);
    }
  }
  return results;
};

// Input:-
const expressions = [
  "2 * 4 * 4",
  "5 / (7 - 5)",
  "sqrt(5^2 - 4^2)",
  "sqrt(-3^2 - 4^2)",
  "end",
];

(async () => {
  const data = await evaluateExpressions(expressions);
  data.forEach((ele) => {
    console.log(ele);
  });
})();

module.exports = evaluateExpressions;
