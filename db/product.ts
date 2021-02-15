import { FirestoreError, QuerySnapshot } from '@firebase/firestore-types';
import { db } from '../lib/db';
import firebase from '../lib/firebase';

export type Product = {
  id?: string;
  title: string;
  description: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  price: {
    value: number;
    currency: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
};

export type Observer = {
  next?: (snapshot: QuerySnapshot) => void;
  error?: (error: FirestoreError) => void;
  complete?: () => void;
};

export const createProduct = async (product: Product) => {
  try {
    const docRef = await db.collection('product').add({
      ...product,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const updateProduct = async (id: string, product: Product) => {
  try {
    const docRef = await db
      .collection('product')
      .doc(id)
      .set({
        ...product,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    console.log('Document updated with ID: ', docRef);
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

export const getProducts = () =>
  db
    .collection('product')
    .get()
    .then(querySnapshot => {
      const data: Product[] = [];
      querySnapshot.forEach(doc => data.push(doc.data() as Product));

      return data;
    });

export const getProductById = async (id: string) => {
  const docRef = db.collection('product').doc(id);

  try {
    const doc = await docRef.get();
    if (doc.exists) return doc.data();
  } catch (error) {
    console.log('Error getting document:', error);
  }

  return [];
};

export const getProductBySlug = async (slug: string) => {
  return db
    .collection('product')
    .where('slug', '==', slug)
    .get()
    .then(querySnapshot => {
      const data: Product[] = [];
      querySnapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() } as Product);
      });

      return data[0];
    })
    .catch(error => {
      console.error('Error getting documents: ', error);
    });
};

export const listenToProducts = (observer: Observer) =>
  db.collection('product').onSnapshot(observer);
