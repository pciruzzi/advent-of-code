import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
const measurements: number[] = input.split('\n').map(Number);

export { measurements };
