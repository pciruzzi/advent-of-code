import { lines } from './input';

describe('Day 5: Hydrotermal venture', () => {
  it('parses the lines correctly', () => {
    expect(lines.length).toEqual(500);
    expect(lines.slice(0, 10)).toEqual([
      { point1: { x: 541, y: 808 }, point2: { x: 108, y: 808 } },
      { point1: { x: 982, y: 23 }, point2: { x: 45, y: 960 } },
      { point1: { x: 558, y: 21 }, point2: { x: 558, y: 318 } },
      { point1: { x: 907, y: 877 }, point2: { x: 43, y: 13 } },
      { point1: { x: 532, y: 213 }, point2: { x: 532, y: 801 } },
      { point1: { x: 599, y: 387 }, point2: { x: 870, y: 387 } },
      { point1: { x: 762, y: 208 }, point2: { x: 78, y: 208 } },
      { point1: { x: 739, y: 527 }, point2: { x: 739, y: 907 } },
      { point1: { x: 64, y: 21 }, point2: { x: 64, y: 958 } },
      { point1: { x: 258, y: 267 }, point2: { x: 929, y: 938 } },
    ]);
  });
});
