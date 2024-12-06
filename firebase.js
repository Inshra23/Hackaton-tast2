import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { getAuth,createUserWithEmailAndPassword ,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getFirestore, collection,addDoc, serverTimestamp, query, orderBy, getDocs,doc,getDoc
  ,updateDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABHBp7skwAvN_d2-CeOqRu7AfvNhnkgeg",
    authDomain: "hackaton-blog-app.firebaseapp.com",
    projectId: "hackaton-blog-app",
    storageBucket: "hackaton-blog-app.firebasestorage.app",
    messagingSenderId: "5147878488",
    appId: "1:5147878488:web:f4069ed7e3e15394d5562d",
    measurementId: "G-REMBER291H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{ auth,getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,db,collection,updateDoc,
  addDoc, serverTimestamp, query, orderBy, getDocs,doc,getDoc
 }