import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Recipe } from './models/recipe.model.js';
import { initDB, createEntry } from './db.js';

yargs(hideBin(process.argv))
  .command({
    command: 'start',
    desc: 'Start up database',
    handler: async () => {
      await initDB();
    },
  })
  .command({
    command: 'new <title>',
    aliasses: ['n'],
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
        await createEntry('recipes', recipe);
        console.log('Recipe created successfully');
      } catch (error) {
        console.error('Failed to create recipe', error);
      }
    },
  })
  .parse();
