import { BingoNumber, Board } from './types';
import { fillAndCheckBoard } from './utils';

export const solve = (numbers: BingoNumber[], boards: Board[]) => {
  let bingoNumber;
  let unmarkedNumbersSum: number | undefined;

  numbers.forEach((number, index) => {
    // Shortcircuit so we don't continue
    if (unmarkedNumbersSum) {
      return;
    }
    boards.forEach((board, boardIndex) => {
      const boardResult = fillAndCheckBoard(board, number);
      if (boardResult) {
        // The board won
        console.log(
          `BINGO! There was a row/column completed when ${number} was out (iteration ${index}), in board ${boardIndex}: ${
            boardResult * number
          }`,
        );
        bingoNumber = number;
        unmarkedNumbersSum = boardResult;
        return;
      }
    });
  });

  return { bingoNumber, unmarkedNumbersSum };
};
