import * as fs from 'fs';
import * as path from 'path';
import { Command, Instruction } from './types';

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
const commands: Command[] = input
  .split('\n')
  .filter((command) => command) // Skip empty lines
  .map((command) => {
    const [instruction, size] = command.split(' ');
    const validInstructions = Object.values(Instruction) as string[];
    if (!validInstructions.includes(instruction)) {
      throw `Invalid instruction: ${instruction}`;
    }
    return { instruction: instruction as Instruction, size: Number(size) };
  });

export { commands };
