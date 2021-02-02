import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBE80XLVhyFcdFGE7YzdOvL_VDgTk3s4Kk",
  authDomain: "book-santa-app-96e04.firebaseapp.com",
  projectId: "book-santa-app-96e04",
  storageBucket: "book-santa-app-96e04.appspot.com",
  messagingSenderId: "1032964437707",
  appId: "1:1032964437707:web:962db6f450cf1c14004d4e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
