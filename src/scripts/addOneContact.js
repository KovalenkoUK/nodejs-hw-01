import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

let contactsList;

export const addOneContact = async () => {
  try {
    contactsList = await readContacts();
  } catch (e) {
    console.log('Error:', e);
  }
  contactsList.push(createFakeContact());
  await writeContacts(contactsList);
};

addOneContact();