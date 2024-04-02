import { updateEntry } from '../db.js';

const TABLE_KEY = 'recipes';

export const updateRecipeCommand = {
  command: 'update <id>',
  aliasses: ['u'],
  desc: 'Update an existing recipe',
  builder: (yargs) => {
    yargs.option('tags', {
      alias: 't',
      type: 'array',
      description: 'Update tags of the recipe',
    });

    yargs.option('name', {
      alias: 'n',
      type: 'string',
      description: 'Update name of the recipe',
    });

    return yargs.positional('title', {
      describe: 'The title of the recipe',
      type: 'string',
    });
  },
  handler: async (argv) => {
    const ob = {};

    if (argv.name) ob['title'] = argv.name;

    if (argv.tags) ob['tags'] = argv.tags;

    try {
      await updateEntry(TABLE_KEY, argv.id, ob);
      console.log('Recipe updated successfully');
    } catch (error) {
      console.error(`Failed to update recipe with id: ${id}`, error);
    }
  },
};
