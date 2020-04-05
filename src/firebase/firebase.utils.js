import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5EqpVHyD5NJNUrlPJkMSsYyItlqG2x6s",
    authDomain: "shop-7f5a5.firebaseapp.com",
    databaseURL: "https://shop-7f5a5.firebaseio.com",
    projectId: "shop-7f5a5",
    storageBucket: "shop-7f5a5.appspot.com",
    messagingSenderId: "475250860445",
    appId: "1:475250860445:web:7be12132cbb3642cc5cf74",
    measurementId: "G-28C7BZVXD5"
  };


  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth)
      return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = userRef.get();

    if(!snapshot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,email,createdAt,...additionalData

        })}catch(error){
          console.log('error creating user',error.message);
        }
      

    }
    return userRef;

   

  }
  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
