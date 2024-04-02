import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { initDB } from './db.js';
import { updateRecipeCommand } from './commands/update-recipe.js';
import { deleteRecipeCommand } from './commands/delete-recipe.js';
import { createRecipeCommand } from './commands/create-recipe.js';
import { getAllRecipesCommand } from './commands/get-recipes.js';
import { getRecipeCommand } from './commands/get-recipe.js';

yargs(hideBin(process.argv))
  .command({
    command: 'start',
    desc: 'Start up database',
    handler: async () => {
      await initDB();
    },
  })
  .command(getAllRecipesCommand)
  .command(getRecipeCommand)
  .command(createRecipeCommand)
  .command(updateRecipeCommand)
  .command(deleteRecipeCommand)
  .parse();
