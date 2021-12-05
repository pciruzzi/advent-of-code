import { measurements } from './utils';

const sumMeasurements = (measurements: number[]) =>
  measurements.reduce((measurementsSum: number, measurement: number) => measurementsSum + measurement, 0);

const MEASUREMENTS_COUNT = 3;
let lastMeasurements: number[] = [];
let increasedCount = 0;

measurements.forEach((measurement) => {
  // In order for the first measurements not to
  if (lastMeasurements.length < MEASUREMENTS_COUNT) {
    lastMeasurements.push(measurement);
    return;
  }
  // We use some sort of queue with fix size
  const newMeasurements = [...lastMeasurements.slice(1, MEASUREMENTS_COUNT), measurement];

  const lastMeasurementsSum = sumMeasurements(lastMeasurements);
  const newMeasurementsSum = sumMeasurements(newMeasurements);
  if (newMeasurementsSum > lastMeasurementsSum) {
    increasedCount += 1;
  }
  lastMeasurements = newMeasurements;
});

console.log(
  `Solution found! There are ${increasedCount} measurements (considered as ${MEASUREMENTS_COUNT}-measurement sliding window) larger than the previous measurement`,
);
