import { set,ref, } from "firebase/database";
import { db } from "../utils/firebaseconig";

function addpost(postobj){
  var currentdate = new Date();
  console.log(currentdate);
    return new Promise(async (resolve, reject) => {
       
        await set(ref(db, `post/${1}`), postobj)
          .then( () => {
         
            resolve("message_added");
          })
          .catch((err) => {
            reject(err.code);
          });
      });
    

}
 export default addpost;