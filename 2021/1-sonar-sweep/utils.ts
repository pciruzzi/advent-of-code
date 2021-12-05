import * as fs from 'fs';
import * as path from 'path';
import { Measurement } from './types';

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
const measurements: Measurement[] = input.split('\n').map(Number);

export { measurements };
