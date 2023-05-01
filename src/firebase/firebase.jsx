// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApYl3yHD-SS5YCkgL7mKY7A1c54SMxpwE",
  authDomain: "chef-tutul-bd.firebaseapp.com",
  projectId: "chef-tutul-bd",
  storageBucket: "chef-tutul-bd.appspot.com",
  messagingSenderId: "883889180815",
  appId: "1:883889180815:web:ba0afcd8f950325325e0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;