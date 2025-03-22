import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

let contactsList;

const generateContacts = async (a) => {
  try {
    contactsList = await readContacts();
  } catch (e) {
    console.log('error:', e);
  }
  for (let i = 0; i < a; i++) {
   contactsList.push(createFakeContact());
  }
  await writeContacts(contactsList);
};

generateContacts(5);