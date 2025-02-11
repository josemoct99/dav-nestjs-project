import { resolve } from 'path';
import * as dotenv from 'dotenv';

const dotenvPath = resolve(process.cwd(), './.env');
dotenv.config({path: dotenvPath});