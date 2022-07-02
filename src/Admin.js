import axios from "axios";
import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebaseConfig from "./firebase";

function Admin() {
  const url = "https://random-word-api.herokuapp.com/word?number=10";
  const app = initializeApp(firebaseConfig);
  var error = ""
  const db = getFirestore(app);
  async function main() {
    try {
      const response = await axios.get(url);
      const docRef = await addDoc(collection(db, "words"), {
        words: response.data,
      });
      
    } catch (e) {
      error = e;
      console.log(error)
    }
  }

  
  return (
    <div>
      hello
      <button onClick={main}>Click</button>
      <h1>{error ? error : null}</h1>
      {/* <button onClick={sendData}>Data Send</button> */}
    </div>
  );
}

export default Admin;
