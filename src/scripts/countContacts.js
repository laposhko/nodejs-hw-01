import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { getAllContacts } from '../scripts/getAllContacts.js';

export const countContacts = async () => {
  try {
    // const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
