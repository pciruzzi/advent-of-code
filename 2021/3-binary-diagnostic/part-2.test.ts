import { solve } from './part-2';
import { Binary } from './types';
import { binaries } from './input';

describe('Day 3: Binary diagnostic', () => {
  it('Part 2 - Example', () => {
    const example: Binary[] = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const result = solve(example);
    expect(result).toEqual({ oxygenGeneratorRating: 23, co2ScrubberRating: 10 });
    expect(result.oxygenGeneratorRating * result.co2ScrubberRating).toEqual(230);
  });
  it('Part 2', () => {
    const result = solve(binaries);
    expect(result).toEqual({ oxygenGeneratorRating: 1071, co2ScrubberRating: 3706 });
    expect(result.oxygenGeneratorRating * result.co2ScrubberRating).toEqual(3969126);
  });
});
