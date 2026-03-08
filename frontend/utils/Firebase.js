import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCRJ1vwVMjRkefJvp39EHLw7mIfjggU9lc",
  authDomain: "onecart-43977.firebaseapp.com",
  projectId: "onecart-43977",
  storageBucket: "onecart-43977.firebasestorage.app",
  messagingSenderId: "849514418710",
  appId: "1:849514418710:web:970025104ee91d1e3b5b37"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


