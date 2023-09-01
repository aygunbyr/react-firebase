import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

import { setProducts } from '../redux/productsSlice';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'products-1239d.firebaseapp.com',
  projectId: 'products-1239d',
  storageBucket: 'products-1239d.appspot.com',
  messagingSenderId: '772999824593',
  appId: '1:772999824593:web:a7a55380659a11fde5f1f0',
  measurementId: 'G-083CPK54QN',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const productsRef = collection(db, 'products');

export const useProductsListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
        };
      });

      dispatch(setProducts(docs));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
