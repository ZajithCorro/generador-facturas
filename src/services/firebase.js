import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCnYduwX8iOivboEz5leS6dc-410G0Kw6w',
  authDomain: 'facturas-platzi.firebaseapp.com',
  projectId: 'facturas-platzi',
  storageBucket: 'facturas-platzi.appspot.com',
  messagingSenderId: '424193367895',
  appId: '1:424193367895:web:b8fde6e74b6aed54036812',
  measurementId: 'G-S4RX2GQK90',
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default dataBase;
