import {
  createEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
} from './db.js';

const TABLE_KEY = 'recipes';

export async function createRecipe(recipe) {
  return createEntry(TABLE_KEY, recipe);
}

export async function getRecipes() {
  return getAllEntries(TABLE_KEY);
}

export async function getRecipe(context) {
  return getEntry(TABLE_KEY, context);
}

export async function updateRecipe(id, context) {
  return updateEntry(TABLE_KEY, id, context);
}

export async function deleteRecipe(id) {
  return deleteEntry(TABLE_KEY, id);
}
