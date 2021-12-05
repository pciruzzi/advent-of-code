import { solve } from './part-1';
import { Binary } from './types';
import { binaries } from './utils';

describe('Day 3: Binary diagnostic', () => {
  it('Part 1 - Example', () => {
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
    expect(result).toEqual({ gammaRate: 22, epsilonRate: 9 });
    expect(result.gammaRate * result.epsilonRate).toEqual(198);
  });
  it('Part 1', () => {
    const result = solve(binaries);
    expect(result).toEqual({ gammaRate: 189, epsilonRate: 3906 });
    expect(result.gammaRate * result.epsilonRate).toEqual(738234);
  });
});
