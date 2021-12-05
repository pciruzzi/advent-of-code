import { binaries } from './input';

describe('Day 3: Binary diagnostic', () => {
  it('parses the file correctly', () => {
    expect(binaries.length).toEqual(1000);
    expect(binaries.slice(0, 10)).toEqual([
      '000001000101',
      '101011100101',
      '100011100110',
      '101001111000',
      '000001000110',
      '000110100010',
      '100010101110',
      '000011001110',
      '110001101011',
      '101100110111',
    ]);
  });
});
