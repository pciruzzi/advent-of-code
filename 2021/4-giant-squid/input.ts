import * as fs from 'fs';
import * as path from 'path';
import { BingoNumber, Board } from './types';

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
const [bingoNumbers, ...rawBoards] = input.split('\n');

const numbers: BingoNumber[] = bingoNumbers.split(',').map(Number);
const boards: Board[] = rawBoards
  .join('\n') // We join to get the "raw" boards again
  .split('\n\n')
  .map((rawBoard) =>
    rawBoard
      .split('\n')
      .filter((rawRow) => rawRow) // Skip empty lines
      .map((rawRow) =>
        rawRow
          .split(' ')
          .filter((possibleNumber) => possibleNumber && possibleNumber !== '')
          .map(Number),
      ),
  );

export { numbers, boards };
