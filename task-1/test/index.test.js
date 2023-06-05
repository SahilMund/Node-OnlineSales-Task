const chai = require("chai");
const { expect } = chai;

// Import the function to be tested
const generateOccurrences = require("..");

describe("Generate Occurrences...", () => {
  const outcomes = [
    { outcome: "Head", probability: 35 },
    { outcome: "Tail", probability: 65 },
  ];
  const numOccurrences = 1000;

  //  to get all the possible outcomes and their probabilities,
  const occurrences = generateOccurrences(outcomes, numOccurrences);

  it("should generate the correct number of occurrences", () => {
    expect(occurrences).to.have.lengthOf(numOccurrences);
  });

  it("should generate occurrences according to the given probabilities", () => {
    // Creating an object outcomeCounts to count the occurrences of each outcome
    const outcomeCounts = occurrences.reduce((counts, outcome) => {
      counts[outcome] = (counts[outcome] || 0) + 1;
      return counts;
    }, {});

    expect(outcomeCounts["Head"]).to.be.closeTo(
      0.35 * numOccurrences,
      0.1 * numOccurrences
    );
    expect(outcomeCounts["Tail"]).to.be.closeTo(
      0.65 * numOccurrences,
      0.1 * numOccurrences
    );
  });
});
