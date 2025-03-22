import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
      const data = new Array();
      
      await writeContacts(data);
      
  } catch (error) {
      
      console.log('Error:', error);
      
  }
};


removeAllContacts();