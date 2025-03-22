import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const pData = JSON.parse(data);
    if (!Array.isArray(pData)) {
      return []; 
    }
    return pData;
  } catch (e) {
    console.error(e);
  }
};