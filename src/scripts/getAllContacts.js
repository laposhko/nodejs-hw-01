import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
