import { Binary } from './types';

const POSITIVE_VALUE = '1';
const NEGATIVE_VALUE = '0';

const getRating = (values: Binary[], criteria: Function, index = 0): Binary => {
  const digitInIndexThatMeetsCriteria = criteria(values, index);
  const valuesMatchingCriteria = values.filter((value) => value[index] === digitInIndexThatMeetsCriteria);

  console.log(
    `## Step ${values[0].length - index}: digit ${digitInIndexThatMeetsCriteria} - initial count ${
      values.length
    } - filtered count ${valuesMatchingCriteria.length}`,
  );

  if (valuesMatchingCriteria.length > 1) {
    // Recursive call: we call the next step only with the values that matched the criteria
    return getRating(valuesMatchingCriteria, criteria, index + 1);
  } else if (valuesMatchingCriteria.length === 1) {
    // We found the rating! Break condition for the recursion
    return valuesMatchingCriteria[0];
  } else {
    throw 'We filtered all the values and no rating was found';
  }
};

const getMostCommonValue = (values: Binary[], index: number) => {
  const valuesCount = values.length;
  const digitSum = values.reduce((acum, binary) => {
    const digit = Number.parseInt(binary[index]);
    return acum + digit;
  }, 0);
  return digitSum >= valuesCount / 2 ? POSITIVE_VALUE : NEGATIVE_VALUE;
};

const getLeastCommonValue = (values: Binary[], index: number) => {
  // TBH, this is not the ideal way to calculate it
  return getMostCommonValue(values, index) === POSITIVE_VALUE ? NEGATIVE_VALUE : POSITIVE_VALUE;
};

// I didn't remember if there was a way to do this easily, so I just created this simple function to do it
const calculateIntFromBinary = (binary: Binary) => {
  const DIGITS_COUNT = binary.length;

  let number = 0;
  for (let i = 0; i < binary.length; i++) {
    const digit = Number.parseInt(binary[i]);
    if (digit === 1) {
      number += 2 ** (DIGITS_COUNT - i - 1);
    }
  }
  return number;
};

export const solve = (binaries: Binary[]) => {
  const oxygenGeneratorRating = getRating(binaries, getMostCommonValue);
  const oxygenGeneratorDecimalRating = calculateIntFromBinary(oxygenGeneratorRating);

  const co2ScrubberRating = getRating(binaries, getLeastCommonValue);
  const co2ScrubberDecimalRating = calculateIntFromBinary(co2ScrubberRating);

  console.log(
    `Solution found! The oxygen generator rating is ${oxygenGeneratorRating} (${oxygenGeneratorDecimalRating}), while the CO2 scrubber rating is ${co2ScrubberRating} (${co2ScrubberDecimalRating}), leading to ${
      oxygenGeneratorDecimalRating * co2ScrubberDecimalRating
    } as result`,
  );

  return { oxygenGeneratorRating: oxygenGeneratorDecimalRating, co2ScrubberRating: co2ScrubberDecimalRating };
};
