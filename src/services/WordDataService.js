import firebase from "../firebase";
// const db_temp = firebase.ref("/words");
import {fb, db, datab} from '../firebase';

const db_temp = fb.database().ref("/words");
// import {fb, db} from '../firebase';
// const db_temp = fb.ref("/words");

class WordDataService {
  getAll() {
    return db_temp;
  }

  create(word) {
    return db_temp.push(word);
  }

  update(key, value) {
    return db_temp.child(key).update(value);
  }

  delete(key) {
    return db_temp.child(key).remove();
  }

  deleteAll() {
    return db_temp.remove();
  }
}

const WordDataServiceEXP = new WordDataService();
export { WordDataServiceEXP }
// export default new WordDataService();
