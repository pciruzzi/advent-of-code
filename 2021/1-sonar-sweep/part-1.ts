import { measurements } from './utils';

// In order for the first iteration to not count as an increase
let lastMeasurement = Number.POSITIVE_INFINITY;
let increasedCount = 0;
measurements.forEach((measurement) => {
  if (measurement > lastMeasurement) {
    increasedCount += 1;
  }
  lastMeasurement = measurement;
});

console.log(`Solution found! There are ${increasedCount} measurements larger than the previous measurement`);
