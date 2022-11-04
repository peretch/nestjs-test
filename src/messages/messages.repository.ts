import { promises as fsPromises } from 'fs';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await fsPromises.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await fsPromises.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await fsPromises.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = {
      id,
      content,
    };
    await fsPromises.writeFile('messages.json', JSON.stringify(messages));
  }
}
