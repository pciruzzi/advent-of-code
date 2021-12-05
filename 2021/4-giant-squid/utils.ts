import { BingoNumber, Board } from './types';

export const fillAndCheckBoard = (board: Board, bingoNumber: BingoNumber) => {
  let sumOfNumbers = 0;
  let columnWithNumber = -1;
  let rowWithNumber = -1;
  board.forEach((row, rowIndex) => {
    row.forEach((position, columnIndex) => {
      if (position.number === bingoNumber) {
        position.found = true;
        columnWithNumber = columnIndex;
        rowWithNumber = rowIndex;
      }
      if (!position.found) {
        sumOfNumbers += position.number;
      }
    });
  });

  // We check if the column is complete
  if (columnWithNumber !== -1) {
    let isColumnCompleted = true;
    for (let i = 0; i < board.length; i++) {
      isColumnCompleted = isColumnCompleted && board[i][columnWithNumber].found;
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
      isRowCompleted = isRowCompleted && board[rowWithNumber][i].found;
    }
    if (isRowCompleted) {
      console.log('Row completed', board);
      return sumOfNumbers;
    }
  }

  return -1;
};
