// import firebase from "../firebase";
// const db_temp = firebase.ref("/words");
import {fb,fbst} from '../firebase';

const db_temp = fb.database().ref("/Uploads"); 
// import {fb, db} from '../firebase';
// const db_temp = fb.ref("/words");
 
// 取得 storage 中對應的位置
//   const storageReference = firebase.storage().ref(fullPath);

class WordDataService {

  getAll() {
    return db_temp;
  }


  putST(key,key2) {
    return fbst.ref(key).put(key2);
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
