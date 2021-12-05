import { Line } from './types';

const createBoard = (lines: Line[]) => {
  const [maxX, maxY] = lines.reduce(
    ([maxX, maxY], line) => {
      let newMaxX = maxX;
      if (line.point1.x > newMaxX) {
        newMaxX = line.point1.x;
      }
      if (line.point2.x > newMaxX) {
        newMaxX = line.point2.x;
      }

      let newMaxY = maxY;
      if (line.point1.y > newMaxY) {
        newMaxY = line.point1.y;
      }
      if (line.point2.y > newMaxY) {
        newMaxY = line.point2.y;
      }

      return [newMaxX, newMaxY];
    },
    [0, 0],
  );

  // Array(...) receives the count of elements
  return Array(maxX + 1)
    .fill(null)
    .map((_) => Array(maxY + 1).fill(0));
};

export const solve = (lines: Line[]) => {
  const horizontalAndVerticalLines = lines.filter(
    (line) => line.point1.x === line.point2.x || line.point1.y === line.point2.y,
  );

  const board = createBoard(horizontalAndVerticalLines);

  let overlappingPoints = 0;
  horizontalAndVerticalLines.forEach((line) => {
    const [minX, maxX] = [Math.min(line.point1.x, line.point2.x), Math.max(line.point1.x, line.point2.x)];
    const [minY, maxY] = [Math.min(line.point1.y, line.point2.y), Math.max(line.point1.y, line.point2.y)];

    // Horizontal line
    if (minX === maxX) {
      // We need to include both ends
      for (let j = minY; j <= maxY; j++) {
        board[minX][j] += 1;
        // We need to check for equality, in order not to consider the overlapping many times
        if (board[minX][j] === 2) {
          overlappingPoints += 1;
        }
      }
    }

    // Vertical line
    if (minY === maxY) {
      // We need to include both ends
      for (let i = minX; i <= maxX; i++) {
        board[i][minY] += 1;
        // We need to check for equality, in order not to consider the overlapping many times
        if (board[i][minY] === 2) {
          overlappingPoints += 1;
        }
      }
    }
  });

  console.log(`Solution found! There are ${overlappingPoints} points where two (or more) lines overlap`, board);

  return { overlappingPoints };
};
