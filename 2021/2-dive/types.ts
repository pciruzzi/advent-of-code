export enum Instruction {
  Up = 'up',
  Down = 'down',
  Forward = 'forward',
}

export type Command = {
  instruction: Instruction;
  size: number;
};
