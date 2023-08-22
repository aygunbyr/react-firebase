import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHS8apSdWvAWuDO1JgxRSpwmyTkvlwjLc',
  authDomain: 'products-1239d.firebaseapp.com',
  projectId: 'products-1239d',
  storageBucket: 'products-1239d.appspot.com',
  messagingSenderId: '772999824593',
  appId: '1:772999824593:web:a7a55380659a11fde5f1f0',
  measurementId: 'G-083CPK54QN',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
