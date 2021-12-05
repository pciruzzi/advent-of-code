import { solve } from './part-2';
import { Command, Instruction } from './types';
import { commands } from './utils';

describe('Day 2: Dive!', () => {
  it('Part 2 - Example', () => {
    const example: Command[] = [
      { instruction: Instruction.Forward, size: 5 },
      { instruction: Instruction.Down, size: 5 },
      { instruction: Instruction.Forward, size: 8 },
      { instruction: Instruction.Up, size: 3 },
      { instruction: Instruction.Down, size: 8 },
      { instruction: Instruction.Forward, size: 2 },
    ];
    const result = solve(example);
    expect(result).toEqual({ position: 15, depth: 60 });
    expect(result.depth * result.position).toEqual(900);
  });
  it('Part 2', () => {
    const result = solve(commands);
    expect(result).toEqual({ position: 1823, depth: 1012318 });
    expect(result.depth * result.position).toEqual(1845455714);
  });
});
