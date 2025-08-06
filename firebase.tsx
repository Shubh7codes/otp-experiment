// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_9E6UafAtfbDRbDSi1pJYO92iJ3GNRVc",
  authDomain: "playground-3d94e.firebaseapp.com",
  databaseURL: "https://playground-3d94e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "playground-3d94e",
  storageBucket: "playground-3d94e.firebasestorage.app",
  messagingSenderId: "723500592722",
  appId: "1:723500592722:web:13625d577347b1b5f5f98b"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();
export {auth};
