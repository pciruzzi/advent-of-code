import * as fs from 'fs';
import * as path from 'path';
import { Binary } from './types';

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
const binaries: Binary[] = input.split('\n').filter((command) => command); // Skip empty lines

export { binaries };
