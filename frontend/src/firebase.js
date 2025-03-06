import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  
apiKey: "AIzaSyBPOzx_QZovlQpi3RN_1_ciH_-REwjBQVM",
authDomain: "reviewxpert-5e526.firebaseapp.com",
projectId: "reviewxpert-5e526",
storageBucket: "reviewxpert-5e526.appspot.com",
messagingSenderId: "277120695775",
appId: "1:277120695775:web:f8cdaf37ae95feba04586a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithRedirect };  // ✅ Make sure signInWithRedirect is exported


