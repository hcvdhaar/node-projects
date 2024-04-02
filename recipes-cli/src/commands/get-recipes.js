import { getAllEntries } from '../db.js';

const TABLE_KEY = 'recipes';

export const getAllRecipesCommand = {
  command: 'get-all',
  aliasses: ['ga'],
  desc: 'Get all the recipes stored in the database',
  handler: async (argv) => {
    try {
      const recipes = await getAllEntries(TABLE_KEY);
      console.log('All recipes: ', recipes);
    } catch (error) {
      console.error('Failed to get all the recipes', error);
    }
  },
};
