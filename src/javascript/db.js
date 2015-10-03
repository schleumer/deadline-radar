// pouchdb will try to use leveldown instead of
// IndexedDB because of Node environment
// so we need to import it's browser file
import PouchDB from '../../node_modules/pouchdb/dist/pouchdb.js';

export default new PouchDB('deadline-radar', { adapter: 'idb' });