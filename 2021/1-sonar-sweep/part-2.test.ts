import { solve } from './part-2';
import { Measurement } from './types';
import { measurements } from './utils';

describe('Day 1: Sonar sweep', () => {
  it('Part 2 - Example', () => {
    const example: Measurement[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(solve(example)).toEqual(5);
  });
  it('Part 2', () => {
    expect(solve(measurements)).toEqual(1262);
  });
});
