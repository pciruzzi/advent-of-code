import { Binary } from './types';

export const solve = (binaries: Binary[]) => {
  const BINARIES_COUNT = binaries.length;
  const DIGITS_COUNT = binaries[0].length;

  // Initialize the array of the sum of each position
  const digitsSum = Array(DIGITS_COUNT).fill(0);

  // We count the amount of 1 (by an addition of them)
  binaries.forEach((binary) => {
    for (let i = 0; i < binary.length; i++) {
      const digit = Number.parseInt(binary[i]);
      digitsSum[i] += digit;
    }
  });

  const gammaRate = digitsSum.reduce((rate, digitSum, index) => {
    if (digitSum > BINARIES_COUNT / 2) {
      rate += 2 ** (DIGITS_COUNT - index - 1);
    }
    return rate;
  }, 0);
  // Given the Epsilon rate is exactly the opposite number (in hexa) to the Gamma (as one is checking
  // for the most common digit, and the other to the least common one), we can just get the decimal
  // number by using the biggest number that could be represented with that amount of digits (2 ^ N - 1),
  // and substracting the Gamma rate
  const epsilonRate = 2 ** DIGITS_COUNT - 1 - gammaRate;

  console.log(
    `Solution found! The Gamma rate is ${gammaRate}, while the Epsilon one is ${epsilonRate}, leading to ${
      gammaRate * epsilonRate
    } as result`,
  );

  return { gammaRate, epsilonRate };
};
