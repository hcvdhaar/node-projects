import chalk from 'chalk';
import { getEntry } from '../db.js';

const TABLE_KEY = 'recipes';

export const getRecipeCommand = {
  command: 'get',
  aliasses: ['g'],
  desc: 'Get all the recipes stored in the database',
  builder: (yargs) => {
    yargs.option('title', {
      alias: 't',
      type: 'string',
      description: 'Get recipes by title',
    });

    yargs.option('id', {
      type: 'string',
      description: 'Get recipes by id',
    });

    return yargs.positional('id', {
      describe: 'The id of the recipe',
      type: 'string',
    });
  },
  handler: async (argv) => {
    try {
      const recipe = await getEntry(TABLE_KEY, {
        id: argv.id,
        title: argv.title,
      });

      console.log(
        chalk.bgGreenBright('Recipe:'),
        '\n',
        chalk.magenta(JSON.stringify(recipe, null, 2))
      );
    } catch (error) {
      console.error(
        `Failed to get recipe with query: ${argv.id || argv.title}`,
        error
      );
    }
  },
};
