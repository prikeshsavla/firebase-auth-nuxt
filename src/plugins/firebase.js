import * as firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDp3mgm4lUtDiNGygoWZO5pmKaFv3dfgkE",
  authDomain: "jwt-nuxt-e391a.firebaseapp.com",
  databaseURL: "https://jwt-nuxt-e391a.firebaseio.com",
  projectId: "jwt-nuxt-e391a",
  storageBucket: "jwt-nuxt-e391a.appspot.com",
  messagingSenderId: "353567293300",
  appId: "1:353567293300:web:f54d42d5c48e71680c3621",
  measurementId: "G-ML4JNHF9FL"
};
// Initialize Firebase

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;