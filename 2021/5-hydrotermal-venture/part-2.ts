import { Line } from './types';
import { createBoard, fillBoardHorizontally, fillBoardVertically, fillBoardDiagonally } from './utils';

export const solve = (lines: Line[]) => {
  const board = createBoard(lines);

  let overlappingPoints = 0;
  lines.forEach((line) => {
    const [xMin, xMax] = [Math.min(line.point1.x, line.point2.x), Math.max(line.point1.x, line.point2.x)];
    const [yMin, yMax] = [Math.min(line.point1.y, line.point2.y), Math.max(line.point1.y, line.point2.y)];

    if (xMin === xMax) {
      overlappingPoints = fillBoardHorizontally(board, { x: xMin, yMin, yMax }, overlappingPoints);
    } else if (yMin === yMax) {
      overlappingPoints = fillBoardVertically(board, { y: yMin, xMin, xMax }, overlappingPoints);
    } else {
      overlappingPoints = fillBoardDiagonally(board, { point1: line.point1, point2: line.point2 }, overlappingPoints);
    }
  });

  console.log(`Solution found! There are ${overlappingPoints} points where two (or more) lines overlap`, board);

  return { overlappingPoints };
};
