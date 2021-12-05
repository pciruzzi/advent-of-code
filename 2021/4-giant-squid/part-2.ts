import { BingoNumber, Board } from './types';
import { fillAndCheckBoard } from './utils';

export const solve = (numbers: BingoNumber[], boards: Board[]) => {
  const wonBoards: number[] = [];
  let bingoNumber: number | undefined;
  let unmarkedNumbersSum: number | undefined;

  numbers.forEach((number, index) => {
    boards.forEach((board, boardIndex) => {
      // If the board has already won, we don't continue filling and checking it
      if (wonBoards.includes(boardIndex)) {
        return;
      }

      const boardResult = fillAndCheckBoard(board, number);
      if (boardResult) {
        // The board won
        wonBoards.push(boardIndex);

        if (wonBoards.length === boards.length) {
          // The last board won
          bingoNumber = number;
          unmarkedNumbersSum = boardResult;
          console.log(
            `BINGO! The last board won when ${number} was out (iteration ${index}), in board ${boardIndex}: ${
              boardResult * number
            }`,
          );
        }
      }
    });
  });

  return { bingoNumber, unmarkedNumbersSum };
};
