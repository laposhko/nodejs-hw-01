import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';
import { getAllContacts } from '../scripts/getAllContacts.js';
const generateContacts = async (number) => {
  function generate(number) {
    let newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    return newContacts;
  }
  try {
    // const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const contacts = await getAllContacts();
    const res = contacts.concat(generate(number));
    await fs.writeFile(PATH_DB, JSON.stringify(res), 'utf8');
  } catch (error) {
    console.log(error);
  }
};

generateContacts(2);
