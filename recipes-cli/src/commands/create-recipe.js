import { createEntry } from '../db.js';
import { Recipe } from '../models/recipe.model.js';

const TABLE_KEY = 'recipes';

export const createRecipeCommand = {
  command: 'add <title>',
  aliasses: ['a'],
  desc: 'Create a new recipe',
  builder: (yargs) => {
    yargs.option('tags', {
      alias: 't',
      type: 'array',
      description: 'Add tags to the recipe',
    });

    return yargs.positional('title', {
      describe: 'The title of the recipe',
      type: 'string',
    });
  },
  handler: async (argv) => {
    const { title, tags } = argv;
    const recipe = new Recipe(title, tags);

    try {
      await createEntry(TABLE_KEY, recipe);
      console.log('Recipe created successfully');
    } catch (error) {
      console.error('Failed to create recipe', error);
    }
  },
};
