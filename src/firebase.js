// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB1j2bG1LoAxC7C66oSMWa1JDZfGr_MthU",
    authDomain: "whatsapp-clone-8418c.firebaseapp.com",
    projectId: "whatsapp-clone-8418c",
    storageBucket: "whatsapp-clone-8418c.appspot.com",
    messagingSenderId: "429630209747",
    appId: "1:429630209747:web:2eaf7fc8f79e016b431e26",
    measurementId: "G-V7Z7EJKHL3"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
