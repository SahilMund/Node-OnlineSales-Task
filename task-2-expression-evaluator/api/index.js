const axios = require("axios");

// Base URL
const API_BASE_URL = "https://api.mathjs.org/v4";

// Function used to get the result that API will return when the expression will be passed
const getExpressionResult = async (expression) => {
  const response = await axios.get(`${API_BASE_URL}/evaluate`, {
    params: {
      expr: expression,
    },
  });
  return response.data;
};

module.exports = getExpressionResult;
