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
          // When I first read, I thought we had to count the number of *checked* numbers not the missing ones.
          // In that case, we wouldn't need a `found` or anything like that, we could just put a `null` on that
          // position and that's it
          .map((number) => ({ number: parseInt(number, 10), found: false })),
      ),
  );

export { numbers, boards };
