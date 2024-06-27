import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from '../scripts/getAllContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    // const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const contacts = await getAllContacts();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
