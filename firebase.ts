// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4vcgWzBzwnNoaypds5wEseY3D-QH3lBI",
  authDomain: "netflix-a30af.firebaseapp.com",
  projectId: "netflix-a30af",
  storageBucket: "netflix-a30af.appspot.com",
  messagingSenderId: "121320336865",
  appId: "1:121320336865:web:0bdad117b06f3e6313b6a0",
};

// Initialize Firebase
// 檢查應用程序是否已經不存在初始化，如果不是那就初始化
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
