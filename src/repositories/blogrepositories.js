import { set,ref, } from "firebase/database";
import { db } from "../utils/firebaseconig";

function addpost(){
    return new Promise(async (resolve, reject) => {
        const id=1;
        await set(ref(db, `post/${id}`), {
          id: "1",
            msg:"hellow"
          
        })
          .then( () => {
         
            resolve("message_added");
          })
          .catch((err) => {
            reject(err.code);
          });
      });
    

}
 export default addpost;