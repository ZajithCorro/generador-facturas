import dataBase from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export const getAllProducts = async () => {
  const productsCol = collection(dataBase, 'productos');
  const productSnapshot = await getDocs(productsCol);
  const productsList = productSnapshot.docs.map((doc) => doc.data());

  return productsList;
};
