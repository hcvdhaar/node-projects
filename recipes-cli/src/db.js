import fs from 'node:fs/promises';

const FILE_PATH = './db.json';
const DB_PATH = new URL(FILE_PATH, import.meta.url).pathname;

async function dbIsStarted() {
  try {
    await fs.access(DB_PATH, fs.constants.R_OK || fs.constants.W_OK);
    return true;
  } catch (error) {
    console.log('DB is not started yet. Run recipe start to start the DB.');
    return false;
  }
}

async function updatedFile(file) {
  const updatedFile = JSON.stringify(file, null, 2);

  return await fs.writeFile(DB_PATH, updatedFile);
}

export async function initDB() {
  try {
    await fs.access(DB_PATH, fs.constants.R_OK || fs.constants.W_OK);
    console.log('db.json exists and is writable and readable.');
  } catch (error) {
    console.log('File does not exist, created new db.json');
    fs.writeFile(DB_PATH, JSON.stringify({ recipes: [] }, null, 2));
  }
}

export async function getAllEntries(tableKey) {
  const dbStarted = await dbIsStarted();

  if (!dbStarted) {
    return;
  }

  const file = await fs.readFile(DB_PATH, 'utf-8');
  const fileObject = JSON.parse(file);

  return fileObject[tableKey] || [];
}

export async function getEntry(tableKey, context) {
  const dbStarted = await dbIsStarted();

  if (!dbStarted) {
    return;
  }

  const file = await fs.readFile(DB_PATH, 'utf-8');
  const fileObject = JSON.parse(file);

  if (context.id) {
    const entry = fileObject[tableKey].find((entry) => entry.id === context.id);
    if (!entry) {
      console.log('Entry not found with id');
    }

    return entry;
  }

  if (context.title) {
    const entry = fileObject[tableKey].find(
      (entry) => entry.title === context.title
    );
    if (!entry) {
      console.log('Entry not found with title');
    }
    return entry;
  }

  return fileObject[tableKey];
}

/**
 *
 * @param {string} tableKey
 * @param {any} data
 */

export async function createEntry(tableKey, data) {
  const dbStarted = await dbIsStarted();

  if (!dbStarted) {
    return;
  }

  const file = await fs.readFile(DB_PATH, 'utf-8');
  const fileObject = JSON.parse(file);

  if (fileObject[tableKey]) {
    fileObject[tableKey].push(data);
  } else {
    fileObject[tableKey] = [data];
  }

  return await fs.writeFile(DB_PATH, JSON.stringify(fileObject, null, 2));
}

/**
 *
 * @param {string} tableKey
 * @param {string} id
 * @param {any} data
 * @returns
 */

export async function updateEntry(tableKey, id, data) {
  const dbStarted = await dbIsStarted();

  if (!dbStarted) {
    return;
  }

  const file = await fs.readFile(DB_PATH, 'utf-8');
  const fileObject = JSON.parse(file);

  if (fileObject[tableKey]) {
    const entryIndex = fileObject[tableKey].findIndex(
      (entry) => entry.id === id
    );

    if (entryIndex === -1) {
      throw new Error('Entry does not exist');
    }

    fileObject[tableKey][entryIndex] = {
      ...fileObject[tableKey][entryIndex],
      ...data,
    };
  } else {
    throw new Error('Table does not exist');
  }

  return await updatedFile(fileObject);
}

export async function deleteEntry(tableKey, id) {
  const dbStarted = await dbIsStarted();

  if (!dbStarted) {
    return;
  }

  const file = await fs.readFile(DB_PATH, 'utf-8');
  const fileObject = JSON.parse(file);
  console.log('file', fileObject);

  if (fileObject[tableKey]) {
    fileObject[tableKey] = fileObject[tableKey].filter(
      (entry) => entry.id !== id
    );
  } else {
    throw new Error('Table does not exist');
  }

  return await updatedFile(fileObject);
}
