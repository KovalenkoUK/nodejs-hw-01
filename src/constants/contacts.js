import path from 'node:path';

//path
const pathToDir = process.cwd();
export const PATH_DB = path.join(pathToDir, 'src', 'db', 'db.json');