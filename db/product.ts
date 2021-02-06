import { FirestoreError, QuerySnapshot } from '@firebase/firestore-types';
import { db } from '../lib/db';

export type Product = {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Observer = {
  next?: (snapshot: QuerySnapshot) => void;
  error?: (error: FirestoreError) => void;
  complete?: () => void;
};

export const createProduct = async (product: Product) => {
  try {
    const docRef = await db.collection('product').add(product);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
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

export const listenToProducts = (observer: Observer) =>
  db.collection('product').onSnapshot(observer);
