import { solve } from './part-1';
import { boards, numbers } from './input';

describe('Day 4: Giant squid', () => {
  it('Part 1 - Example', () => {
    const numbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
    const boards = [
      [
        [
          { number: 22, found: false },
          { number: 13, found: false },
          { number: 17, found: false },
          { number: 11, found: false },
          { number: 0, found: false },
        ],
        [
          { number: 8, found: false },
          { number: 2, found: false },
          { number: 23, found: false },
          { number: 4, found: false },
          { number: 24, found: false },
        ],
        [
          { number: 21, found: false },
          { number: 9, found: false },
          { number: 14, found: false },
          { number: 16, found: false },
          { number: 7, found: false },
        ],
        [
          { number: 6, found: false },
          { number: 10, found: false },
          { number: 3, found: false },
          { number: 18, found: false },
          { number: 5, found: false },
        ],
        [
          { number: 1, found: false },
          { number: 12, found: false },
          { number: 20, found: false },
          { number: 15, found: false },
          { number: 19, found: false },
        ],
      ],
      [
        [
          { number: 3, found: false },
          { number: 15, found: false },
          { number: 0, found: false },
          { number: 2, found: false },
          { number: 22, found: false },
        ],
        [
          { number: 9, found: false },
          { number: 18, found: false },
          { number: 13, found: false },
          { number: 17, found: false },
          { number: 5, found: false },
        ],
        [
          { number: 19, found: false },
          { number: 8, found: false },
          { number: 7, found: false },
          { number: 25, found: false },
          { number: 23, found: false },
        ],
        [
          { number: 20, found: false },
          { number: 11, found: false },
          { number: 10, found: false },
          { number: 24, found: false },
          { number: 4, found: false },
        ],
        [
          { number: 14, found: false },
          { number: 21, found: false },
          { number: 16, found: false },
          { number: 12, found: false },
          { number: 6, found: false },
        ],
      ],
      [
        [
          { number: 14, found: false },
          { number: 21, found: false },
          { number: 17, found: false },
          { number: 24, found: false },
          { number: 4, found: false },
        ],
        [
          { number: 10, found: false },
          { number: 16, found: false },
          { number: 15, found: false },
          { number: 9, found: false },
          { number: 19, found: false },
        ],
        [
          { number: 18, found: false },
          { number: 8, found: false },
          { number: 23, found: false },
          { number: 26, found: false },
          { number: 20, found: false },
        ],
        [
          { number: 22, found: false },
          { number: 11, found: false },
          { number: 13, found: false },
          { number: 6, found: false },
          { number: 5, found: false },
        ],
        [
          { number: 2, found: false },
          { number: 0, found: false },
          { number: 12, found: false },
          { number: 3, found: false },
          { number: 7, found: false },
        ],
      ],
    ];
    const result = solve(numbers, boards);
    expect(result).toEqual({ unmarkedNumbersSum: 188, bingoNumber: 24 });
    expect(result.unmarkedNumbersSum * result.bingoNumber).toEqual(4512);
  });
  it('Part 1', () => {
    const result = solve(numbers, boards);
    expect(result).toEqual({ unmarkedNumbersSum: 1068, bingoNumber: 10 });
    expect(result.unmarkedNumbersSum * result.bingoNumber).toEqual(10680);
  });
});
