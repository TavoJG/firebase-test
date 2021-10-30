import db from "./config/db_config"

const docRef = db.collection('users').doc('alovelace');

const saveDoc = async () => await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

saveDoc()