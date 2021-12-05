import { solve } from './part-1';
import { Command, Instruction } from './types';
import { commands } from './utils';

describe('Day 2: Dive!', () => {
  it('Part 1 - Example', () => {
    const example: Command[] = [
      { instruction: Instruction.Forward, size: 5 },
      { instruction: Instruction.Down, size: 5 },
      { instruction: Instruction.Forward, size: 8 },
      { instruction: Instruction.Up, size: 3 },
      { instruction: Instruction.Down, size: 8 },
      { instruction: Instruction.Forward, size: 2 },
    ];
    const result = solve(example);
    expect(result).toEqual({ position: 15, depth: 10 });
    expect(result.depth * result.position).toEqual(150);
  });
  it('Part 1', () => {
    const result = solve(commands);
    expect(result).toEqual({ position: 1823, depth: 1018 });
    expect(result.depth * result.position).toEqual(1855814);
  });
});
