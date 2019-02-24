import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDA-Pe2MUZAhQZeK7YNX4fAk01QS6N79iE",
  authDomain: "studio-aede6.firebaseapp.com",
  databaseURL: "https://studio-aede6.firebaseio.com",
  projectId: "studio-aede6",
  storageBucket: "studio-aede6.appspot.com",
  messagingSenderId: "8947712836"
};

firebase.initializeApp(config);

export default firebase;
