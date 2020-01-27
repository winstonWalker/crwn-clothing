import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBM2QcGpKEPwLFSp0FA9MFC8MY2JKP76Ww',
	authDomain: 'crwn-db-2287d.firebaseapp.com',
	databaseURL: 'https://crwn-db-2287d.firebaseio.com',
	projectId: 'crwn-db-2287d',
	storageBucket: 'crwn-db-2287d.appspot.com',
	messagingSenderId: '696351748081',
	appId: '1:696351748081:web:82d54590bb91dcee555e50',
	measurementId: 'G-0SN50TN43E'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
