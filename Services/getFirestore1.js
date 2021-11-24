import firebase from 'firebase/compat/app';
//import {getFirestore} from 'firebase/firestore';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDe_fqFXusTueUCCxTY-TO7uDPIZ_gxGp8",
    authDomain: "appsani-af6ba.firebaseapp.com",
    projectId: "appsani-af6ba",
    storageBucket: "appsani-af6ba.appspot.com",
    messagingSenderId: "449346808491",
    appId: "1:449346808491:web:2306aa84c0b802a32965ee",
    measurementId: "G-1SBEBBGPPG"
  };


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore1(){    
    return firebase.firestore(app)
}