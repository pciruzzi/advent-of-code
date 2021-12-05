import { Instruction } from './types';
import { commands } from './input';

describe('Day 1: Sonar sweep', () => {
  it('parses the file correctly', () => {
    expect(commands.length).toEqual(1000);
    expect(commands.slice(0, 10)).toEqual([
      { instruction: Instruction.Forward, size: 8 },
      { instruction: Instruction.Forward, size: 3 },
      { instruction: Instruction.Down, size: 8 },
      { instruction: Instruction.Down, size: 2 },
      { instruction: Instruction.Up, size: 1 },
      { instruction: Instruction.Up, size: 4 },
      { instruction: Instruction.Down, size: 9 },
      { instruction: Instruction.Forward, size: 3 },
      { instruction: Instruction.Forward, size: 4 },
      { instruction: Instruction.Forward, size: 5 },
    ]);
  });
});
