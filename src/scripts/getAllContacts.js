import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return Array.isArray(data) ? [...data] : [];
  } catch (error) {
    console.log('Error:', error);
  }
};


console.log(await getAllContacts());