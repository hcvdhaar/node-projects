import { v4 as uuidv4 } from 'uuid';

export class Recipe {
  constructor(title, tags) {
    this.title = title;
    this.tags = tags;
    this.id = uuidv4();
  }
}
