import path from "path";
import { fileURLToPath } from 'url';

// export const rootFolder = path.dirname(path.dirname(path.dirname(new URL(import.meta.url).pathname)));
export const rootFolder = path.dirname(path.dirname(path.dirname(fileURLToPath(import.meta.url))));
export const buildFolder = path.join(rootFolder, 'public');
