import { Command, Instruction } from './types';

export const solve = (commands: Command[]) => {
  let depth = 0;
  let position = 0;

  commands.forEach(({ instruction, size }) => {
    if (instruction === Instruction.Forward) {
      position += size;
    } else if (instruction === Instruction.Up) {
      depth -= size;
    } else if (instruction === Instruction.Down) {
      depth += size;
    }
  });

  console.log(
    `Solution found! The final horizontal position is ${position}, and the final depth is ${depth}, leading to ${
      depth * position
    } as result`,
  );

  return { depth, position };
};
