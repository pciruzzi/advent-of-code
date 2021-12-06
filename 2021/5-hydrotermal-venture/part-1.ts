import { Line } from './types';
import { createBoard } from './utils';

export const solve = (lines: Line[]) => {
  const horizontalAndVerticalLines = lines.filter(
    (line) => line.point1.x === line.point2.x || line.point1.y === line.point2.y,
  );

  const board = createBoard(horizontalAndVerticalLines);

  let overlappingPoints = 0;
  horizontalAndVerticalLines.forEach((line) => {
    const [xMin, xMax] = [Math.min(line.point1.x, line.point2.x), Math.max(line.point1.x, line.point2.x)];
    const [yMin, yMax] = [Math.min(line.point1.y, line.point2.y), Math.max(line.point1.y, line.point2.y)];

    // Horizontal line
    if (xMin === xMax) {
      // We need to include both ends
      for (let j = yMin; j <= yMax; j++) {
        board[xMin][j] += 1;
        // We need to check for equality, in order not to consider the overlapping many times
        if (board[xMin][j] === 2) {
          overlappingPoints += 1;
        }
      }
    }

    // Vertical line
    if (yMin === yMax) {
      // We need to include both ends
      for (let i = xMin; i <= xMax; i++) {
        board[i][yMin] += 1;
        // We need to check for equality, in order not to consider the overlapping many times
        if (board[i][yMin] === 2) {
          overlappingPoints += 1;
        }
      }
    }
  });

  console.log(`Solution found! There are ${overlappingPoints} points where two (or more) lines overlap`, board);

  return { overlappingPoints };
};
