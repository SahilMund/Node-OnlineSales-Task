# Task - 1 : Occurrences Generators

This is a Node.js program that generates occurrences based on probabilities of different outcomes. It allows you to simulate events with biased probabilities, such as rolling a biased dice or flipping a biased coin.

## Getting Started :-

To run this program, follow the steps below:

1. Clone the repository (or) download the zip:

```
git clone https://github.com/SahilMund/Node-OnlineSales-Task.git
```

2. Install the dependencies:

```
cd task-1
npm install
```

3. Run the program:

```
npm start
```

4. The probabilities given are as integers and percentages.
   Each occurrence of the event should only generate one of the outcomes given in input. The outcome of each occurrence is independent of that of others. On observing a large number (say 1000) of occurrences, the probability distribution should roughly follow the given biasness.

## Example

The program will generate a large number of occurrences based on the given probabilities and display the result:

Here's an example of running the program with some expressions:

Input:

```
[
  { outcome: "Head", probability: 35 },
  { outcome: "Tail", probability: 65 },
];
```

Output:

```
On triggering the event 1000 times, Head appeared 332 times and Tail 668 times which is roughly inline with the biasness given.
```

Note :- his is just one of the possibilities.

## Unit Testing

Unit tests for the program can be found in the `test` folder. They can be run using the following command:

```
npm test
```

The unit tests cover different scenarios and ensure the correctness of the evaluation logic.
