import { deleteEntry } from '../db.js';

const TABLE_KEY = 'recipes';

export const deleteRecipeCommand = {
  command: 'delete <id>',
  aliasses: ['d'],
  desc: 'Create a new recipe',
  builder: (yargs) => {
    return yargs.positional('id', {
      describe: 'The id of the recipe',
      type: 'string',
    });
  },
  handler: async (argv) => {
    const { id } = argv;

    try {
      await deleteEntry(TABLE_KEY + '349857', id);
      console.log('Recipe deleted successfully');
    } catch (error) {
      console.error('Failed to delete recipe', error);
    }
  },
};
