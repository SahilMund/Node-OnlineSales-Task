// Function to generate occurrences based on probabilities
const generateOccurrences = (outcomes, numOccurrences) => {

  // Calculate the total probability
  const totalProbability = outcomes.reduce(
    (sum, outcome) => sum + outcome.probability,
    0
  );

  // Normalize the probabilities to a total of 1
  const normalizedOutcomes = outcomes.map((outcome) => ({
    outcome: outcome.outcome,
    probability: outcome.probability / totalProbability,
  }));

  // Generate the occurrences based on the probabilities
  const occurrences = [];
  for (let i = 0; i < numOccurrences; i++) {
    const random = Math.random();
    let cumulativeProbability = 0;

    for (const outcome of normalizedOutcomes) {
      cumulativeProbability += outcome.probability;
      if (random <= cumulativeProbability) {
        occurrences.push(outcome.outcome);
        break;
      }
    }
  }

  return occurrences;
};

// Example usage for flipping a coin
const outcomes = [
  { outcome: "Head", probability: 35 },
  { outcome: "Tail", probability: 65 },
];


const numOccurrences = 1000;
const occurrences = generateOccurrences(outcomes, numOccurrences);

// Count the occurrences of each outcome
const outcomeCounts = occurrences.reduce((counts, outcome) => {
  counts[outcome] = (counts[outcome] || 0) + 1;
  return counts;
}, {});



console.log(`On triggering the event ${numOccurrences} times,Head appeared ${outcomeCounts["Head"]} times and Tail ${outcomeCounts["Tail"]} times which is roughly inline with the biasness given.`);

module.exports = generateOccurrences;