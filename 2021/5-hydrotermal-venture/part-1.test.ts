import { solve } from './part-1';
import { lines } from './input';
import { Line } from './types';

describe('Day 5: Hydrotermal venture', () => {
  it('Part 1 - Example', () => {
    const lines: Line[] = [
      { point1: { x: 0, y: 9 }, point2: { x: 5, y: 9 } },
      { point1: { x: 8, y: 0 }, point2: { x: 0, y: 8 } },
      { point1: { x: 9, y: 4 }, point2: { x: 3, y: 4 } },
      { point1: { x: 2, y: 2 }, point2: { x: 2, y: 1 } },
      { point1: { x: 7, y: 0 }, point2: { x: 7, y: 4 } },
      { point1: { x: 6, y: 4 }, point2: { x: 2, y: 0 } },
      { point1: { x: 0, y: 9 }, point2: { x: 2, y: 9 } },
      { point1: { x: 3, y: 4 }, point2: { x: 1, y: 4 } },
      { point1: { x: 0, y: 0 }, point2: { x: 8, y: 8 } },
      { point1: { x: 5, y: 5 }, point2: { x: 8, y: 2 } },
    ];
    const result = solve(lines);
    expect(result).toEqual({ overlappingPoints: 5 });
  });
  it('Part 1', () => {
    const result = solve(lines);
    expect(result).toEqual({ overlappingPoints: 7674 });
  });
});
