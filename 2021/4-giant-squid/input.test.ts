import { numbers, boards } from './input';

describe('Day 4: Giant squid', () => {
  it('parses the numbers correctly', () => {
    expect(numbers.length).toEqual(100);
    expect(numbers.slice(0, 10)).toEqual([67, 31, 58, 8, 79, 18, 19, 45, 38, 13]);
  });

  it('parses the boards correctly', () => {
    expect(boards.length).toEqual(100);
    expect(boards[1]).toEqual([
      [0, 66, 5, 51, 8],
      [45, 57, 31, 3, 62],
      [7, 60, 40, 29, 90],
      [80, 19, 47, 86, 81],
      [95, 69, 68, 53, 93],
    ]);
    boards.map((board) => {
      expect(board.length).toEqual(5);
      board.map((row) => {
        expect(row.length).toEqual(5);
      });
    });
  });
});
