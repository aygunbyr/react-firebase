import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
} from 'firebase/firestore';

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

const productsRef = collection(db, 'products');

export const useProductsListener = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(productsRef, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate(),
          };
        })
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return products;
};

export const deleteProduct = (id) => {
  deleteDoc(doc(db, 'products', id));
};

export const addProduct = () => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;

  addDoc(productsRef, {
    name: 'iPhone',
    description: 'Lorem ipsum',
    price: 2002,
    uid,
  });
};
