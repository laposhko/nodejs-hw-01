import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { getAllContacts } from '../scripts/getAllContacts.js';

export const removeLastContact = async () => {
  try {
    // const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const contacts = await getAllContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
//npm run remove-last
