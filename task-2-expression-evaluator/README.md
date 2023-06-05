# Task - 2 : Expression Evaluator

This is a Node.js program that evaluates mathematical expressions using a web API. It accepts multiple expressions and displays the result of each expression on the console.


## Getting Started :-

To run this program, follow the steps below:

1. Clone the repository (or) download the zip:
```
git clone https://github.com/SahilMund/Node-OnlineSales-Task.git
```

2. Install the dependencies:
```
cd task-2-expression-evaluator
npm install
```

3. Run the program:
```
npm start
```

## Dependencies

- `axios`: Used for making HTTP requests to the web API.

## Configuration

The web API used for evaluating expressions is configured in the `api.js` file. You can modify the `API_BASE_URL` constant to change the API endpoint.

## Example

Here's an example of running the program with some expressions:

Input :-

``` 
2 * 4 * 4
5 / (7 - 5)
sqrt(5^2 - 4^2)
sqrt(-3^2 - 4^2)
end
```

The program will evaluate each expression using the web API and display the result on the console:

```
2 * 4 * 4 => 32
5 / (7 - 5) => 2.5
sqrt(5^2 - 4^2) => 3
sqrt(-3^2 - 4^2) => 5i
```

## Unit Testing

Unit tests for the program can be found in the `test` folder. They can be run using the following command:

```
npm test
```

# Unit Testing Dependencies :-

- `Mocha`
- `Chai`

The unit tests cover different scenarios and ensure the correctness of the evaluation logic.


