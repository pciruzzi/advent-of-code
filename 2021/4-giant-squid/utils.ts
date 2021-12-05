import { BingoNumber, Board, BoardPosition } from './types';

const isArrayCompleted = (positions: BoardPosition[]): boolean =>
  positions.reduce((isCompleted: boolean, position) => isCompleted && position === null, true);

export const fillAndCheckBoard = (board: Board, bingoNumber: BingoNumber) => {
  let sumOfNumbers = 0;
  let columnWithNumber: number | undefined;
  let rowWithNumber: number | undefined;

  board.forEach((row, rowIndex) => {
    row.forEach((position, columnIndex) => {
      // If the number is in the board, we keep the row and column it's in
      if (position === bingoNumber) {
        row[columnIndex] = null; // We overwrite the row in that position this way, because `position` is a copy, not a reference
        columnWithNumber = columnIndex;
        rowWithNumber = rowIndex;
      }
      // @ts-ignore TODO: Why is it considering it can be null, even when we're checking that already?
      sumOfNumbers += row[columnIndex] ? row[columnIndex] : 0;
    });
  });

  // We check if the row is complete
  // We can't check `rowWithNumber && ...` because it can be 0
  if (rowWithNumber !== undefined && isArrayCompleted(board[rowWithNumber])) {
    console.log('Row completed', board);
    return sumOfNumbers;
  }

  // We check if the column is complete
  if (columnWithNumber !== undefined && isArrayCompleted(board.map((row) => row[columnWithNumber!]))) {
    console.log('Column completed', board);
    return sumOfNumbers;
  }
};
