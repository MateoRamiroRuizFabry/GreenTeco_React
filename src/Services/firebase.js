import {getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqzDR9IkfLBRLHAw-8mxv9qmc0bB8-A1M",
  authDomain: "react-app-ecommerce-e3da5.firebaseapp.com",
  projectId: "react-app-ecommerce-e3da5",
  storageBucket: "react-app-ecommerce-e3da5.appspot.com",
  messagingSenderId: "795917146026",
  appId: "1:795917146026:web:5c4dec9a536818d31afdd3"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function getData(){
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({...item.data(), id: item.id })
  );
  return docsData
};

async function getProductData(id){
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
    return {...docSnapshot.data(), id: docSnapshot.id};
    } else {
    throw new Error("No encontramos ese producto.")
    }
}

async function getProductByCategory(filtro){
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("categoria", "==", filtro))
    const documentsSnapshot = await getDocs(q);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map((item) => ({...item.data(), id: item.id })
    );
    return docsData
}

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)
  
    return(docCreated.id)
};


export {getData, getProductData, getProductByCategory, createOrder};