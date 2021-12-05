import { numbers, boards } from './input';

describe('Day 4: Giant squid', () => {
  it('parses the numbers correctly', () => {
    expect(numbers.length).toEqual(100);
    expect(numbers.slice(0, 10)).toEqual([67, 31, 58, 8, 79, 18, 19, 45, 38, 13]);
  });

  it('parses the boards correctly', () => {
    expect(boards.length).toEqual(100);
    expect(boards[1]).toEqual([
      [
        { number: 0, found: false },
        { number: 66, found: false },
        { number: 5, found: false },
        { number: 51, found: false },
        { number: 8, found: false },
      ],
      [
        { number: 45, found: false },
        { number: 57, found: false },
        { number: 31, found: false },
        { number: 3, found: false },
        { number: 62, found: false },
      ],
      [
        { number: 7, found: false },
        { number: 60, found: false },
        { number: 40, found: false },
        { number: 29, found: false },
        { number: 90, found: false },
      ],
      [
        { number: 80, found: false },
        { number: 19, found: false },
        { number: 47, found: false },
        { number: 86, found: false },
        { number: 81, found: false },
      ],
      [
        { number: 95, found: false },
        { number: 69, found: false },
        { number: 68, found: false },
        { number: 53, found: false },
        { number: 93, found: false },
      ],
    ]);
    boards.map((board) => {
      expect(board.length).toEqual(5);
      board.map((row) => {
        expect(row.length).toEqual(5);
      });
    });
  });
});
