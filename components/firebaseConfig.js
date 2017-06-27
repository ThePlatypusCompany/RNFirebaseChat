import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
