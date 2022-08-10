import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiMCSBHu7iP8sdVlOx33b1wljnDbJRO7E",
    authDomain: "authentication-5370b.firebaseapp.com",
    projectId: "authentication-5370b",
    storageBucket: "authentication-5370b.appspot.com",
    messagingSenderId: "151421018455",
    appId: "1:151421018455:web:6517bf89ce540196185e12",
    measurementId: "G-S14JQJ352X"
  };


  const saveData = () => {
    firebase.initializeApp(firebaseConfig);
    // const expirationDate = new Date(new Date().getTime() + 3600 * 1000); 
    const user = firebase.auth().currentUser;
    user
      .getIdToken(/* forceRefresh */ true)
      .then((idToken) => {
        window.localStorage.setItem("idToken", idToken);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  export const setCurrentAuthState = () => {
    const idToken = window.localStorage.getItem("idToken");
    if (idToken === undefined) {
      return logoutUser();
    } else {
      const expirationDate = new Date(localStorage.getItem("expiration"));
      if (expirationDate <= new Date()) {
        return logoutUser();
      } else {
        // const remainingTime =
          // (expirationDate.getTime() - new Date().getTime()) / 1000;
        // return checkAuthTimeout(remainingTime);
      }
    }
  };



  export const loginUser = async (email, password) => {

    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        saveData();
      })
      .catch((error) => {
        // console.log("login error");
        alert("User not found")
        window.location.reload()
        // ..
      });
  };
  
  export const logoutUser = async () => {
    firebase.initializeApp(firebaseConfig );
    window.localStorage.removeItem("idToken");
    window.localStorage.removeItem("expiration");
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        // console.log("firebase error");
        alert("Something went wrong")
        window.location.reload()
      });
  };
  
  