import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp-8SIVzsUomT1jRvQIXYFPMETfbK5oF0",
  authDomain: "linkedin-clone-2f465.firebaseapp.com",
  projectId: "linkedin-clone-2f465",
  storageBucket: "linkedin-clone-2f465.appspot.com",
  messagingSenderId: "698554342846",
  appId: "1:698554342846:web:00017e3ad325469e532def",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
