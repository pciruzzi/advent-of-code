import { measurements } from './input';

describe('Day 1: Sonar sweep', () => {
  it('parses the file correctly', () => {
    expect(measurements.length).toEqual(2000);
    expect(measurements.slice(0, 10)).toEqual([157, 158, 167, 157, 148, 154, 155, 156, 151, 126]);
  });
});
