import { getRecipes } from '../recipe-controller.js';

export const getAllRecipesCommand = {
  command: 'get-all',
  aliasses: ['ga'],
  desc: 'Get all the recipes stored in the database',
  handler: async (argv) => {
    try {
      const recipes = await getRecipes();
      console.log('All recipes: ', recipes);
    } catch (error) {
      console.error('Failed to get all the recipes', error);
    }
  },
};
