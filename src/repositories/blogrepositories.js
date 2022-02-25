import { set,ref, } from "firebase/database";
import { db } from "../utils/firebaseconig";
import { v4 as uuidv4 } from 'uuid';

function addpost(postobj){

  const pid=uuidv4();
    return new Promise(async (resolve, reject) => {
       
        await set(ref(db, `post/${pid}`), postobj)
          .then( () => {
         
            resolve("message_added");
          })
          .catch((err) => {
            reject(err.code);
          });
      });
    

}
 export default addpost;