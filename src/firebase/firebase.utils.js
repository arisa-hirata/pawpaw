import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAl6qVzRhmMTywfQklx2PFHGS7bktLnfws',
  authDomain: 'crwn-db-5414b.firebaseapp.com',
  databaseURL: 'https://crwn-db-5414b.firebaseio.com',
  projectId: 'crwn-db-5414b',
  storageBucket: '',
  messagingSenderId: '635908374379',
  appId: '1:635908374379:web:d6b1675cb1c080ef'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ proppt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
