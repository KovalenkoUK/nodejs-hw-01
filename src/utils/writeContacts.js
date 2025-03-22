import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, '\t');
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Successfully written to the file');
  } catch (e) {
    console.error('Error:', e);
  }
};