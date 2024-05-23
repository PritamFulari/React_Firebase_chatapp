import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "csdca-s",
  authDomain: "-86csddddddddddds.com",
  projectId: "dcs",
  storageBucket: "reactcdsm",
  messagingSenderId: "cds",
  appId: "1:cds",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
