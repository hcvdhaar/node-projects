import fs from 'node:fs/promises';

const FILE_PATH = './db.json';
const DB_PATH = new URL(FILE_PATH, import.meta.url).pathname;

export async function initDB() {
  try {
    await fs.access(DB_PATH, fs.constants.R_OK || fs.constants.W_OK);
    console.log('db.json exists and is writable and readable.');
  } catch (error) {
    console.log('File does not exist, created new db.json');
    fs.writeFile(DB_PATH, JSON.stringify({ recipes: [] }, null, 2));
  }
}

/**
 *
 * @param {string} tableKey
 * @param {any} data
 */

export async function createEntry(tableKey, data) {
  const file = await fs.readFile(DB_PATH, 'utf-8');
  const fileObject = JSON.parse(file);

  if (fileObject[tableKey]) {
    fileObject[tableKey].push(data);
  } else {
    fileObject[tableKey] = [data];
  }

  return await fs.writeFile(DB_PATH, JSON.stringify(fileObject, null, 2));
}
