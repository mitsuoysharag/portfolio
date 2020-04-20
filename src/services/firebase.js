import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBfl3GJFpsZ0UZHbWGIM1eWGrmaPrEKJQE",
  authDomain: "portfolio-783f4.firebaseapp.com",
  databaseURL: "https://portfolio-783f4.firebaseio.com",
  projectId: "portfolio-783f4",
  storageBucket: "portfolio-783f4.appspot.com",
  messagingSenderId: "412076747728",
  appId: "1:412076747728:web:d716a99604c467360ca7d5",
  measurementId: "G-ZF7EXBEJ3L"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

async function get(collection) {
  let response = await firebase
    .firestore()
    .collection(collection)
    .get();
  let data = response.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return data;
}

export { get }