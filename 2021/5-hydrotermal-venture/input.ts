import * as fs from 'fs';
import * as path from 'path';
import { Line } from './types';

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

const mapPoint = (vertex: string) => {
  const [x, y] = vertex.split(',').map(Number);
  return { x, y };
};

export const lines: Line[] = input
  .split('\n')
  .filter((rawLine) => rawLine) // Skip empty lines
  .map((rawLine) => {
    const [point1, point2] = rawLine.split(' -> ');
    return { point1: mapPoint(point1), point2: mapPoint(point2) };
  });
