import { BingoNumber, Board } from './types';

export const fillAndCheckBoard = (board: Board, bingoNumber: BingoNumber) => {
  let sumOfNumbers = 0;
  let columnWithNumber = -1;
  let rowWithNumber = -1;

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

  // We check if the column is complete
  if (columnWithNumber !== -1) {
    let isColumnCompleted = true;
    for (let i = 0; i < board.length; i++) {
      isColumnCompleted = isColumnCompleted && board[i][columnWithNumber] === null;
    }
    if (isColumnCompleted) {
      console.log('Column completed', board);
      return sumOfNumbers;
    }
  }

  // We check if the row is complete
  if (rowWithNumber !== -1) {
    let isRowCompleted = true;
    for (let i = 0; i < board[rowWithNumber].length; i++) {
      isRowCompleted = isRowCompleted && board[rowWithNumber][i] === null;
    }
    if (isRowCompleted) {
      console.log('Row completed', board);
      return sumOfNumbers;
    }
  }

  return -1;
};
