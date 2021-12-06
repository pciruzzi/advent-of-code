import { Board, Line, Point } from './types';

export const createBoard = (lines: Line[]): Board => {
  const [xMax, yMax] = lines.reduce(
    ([xMax, yMax], line) => {
      let newXMax = xMax;
      if (line.point1.x > newXMax) {
        newXMax = line.point1.x;
      }
      if (line.point2.x > newXMax) {
        newXMax = line.point2.x;
      }

      let newYMax = yMax;
      if (line.point1.y > newYMax) {
        newYMax = line.point1.y;
      }
      if (line.point2.y > newYMax) {
        newYMax = line.point2.y;
      }

      return [newXMax, newYMax];
    },
    [0, 0],
  );

  // Array(...) receives the count of elements
  return Array(xMax + 1)
    .fill(null)
    .map((_) => Array(yMax + 1).fill(0));
};

export const fillBoardHorizontally = (
  board: Board,
  boundries: { x: number; yMin: number; yMax: number },
  overlappingPoints: number,
) => {
  const { x, yMin, yMax } = boundries;
  // We need to include both ends
  for (let j = yMin; j <= yMax; j++) {
    board[x][j] += 1;
    // We need to check for equality, in order not to consider the overlapping many times
    if (board[x][j] === 2) {
      overlappingPoints += 1;
    }
  }

  return overlappingPoints;
};

export const fillBoardVertically = (
  board: Board,
  boundries: { y: number; xMin: number; xMax: number },
  overlappingPoints: number,
) => {
  const { y, xMin, xMax } = boundries;
  // We need to include both ends
  for (let i = xMin; i <= xMax; i++) {
    board[i][y] += 1;
    // We need to check for equality, in order not to consider the overlapping many times
    if (board[i][y] === 2) {
      overlappingPoints += 1;
    }
  }

  return overlappingPoints;
};

export const fillBoardDiagonally = (
  board: Board,
  boundries: { point1: Point; point2: Point },
  overlappingPoints: number,
) => {
  const {
    point1: { x: x1, y: y1 },
    point2: { x: x2, y: y2 },
  } = boundries;
  let x, y, yDifference;

  // We select which is going to be our "base" point. We want it to be the one with less x coordinate.
  // Then, once we select the point, we set how the y coordinate will vary (if it will increase or
  // decrease)
  if (x2 > x1) {
    x = x1;
    y = y1;
    yDifference = y2 > y1 ? 1 : -1;
  } else {
    x = x2;
    y = y2;
    yDifference = y2 > y1 ? -1 : 1;
  }

  for (let i = 0; i <= Math.abs(x1 - x2); i++) {
    board[x + i][y + i * yDifference] += 1;
    // We need to check for equality, in order not to consider the overlapping many times
    if (board[x + i][y + i * yDifference] === 2) {
      overlappingPoints += 1;
    }
  }

  return overlappingPoints;
};
