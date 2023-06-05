const axios = require("axios");

const API_BASE_URL = "https://api.mathjs.org/v4";

const getExpressionResult = async (expression) => {
  const response = await axios.get(`${API_BASE_URL}/evaluate`, {
    params: {
      expr: expression,
    },
  });
  return response.data;
};

module.exports = getExpressionResult;
