import firebase from "@firebase/app"
import "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDAALs05d8dvO3Xc6O6U22p46J_bw3QUf8",
    authDomain: "sneaker-dea.firebaseapp.com",
    databaseURL: "https://sneaker-dea.firebaseio.com",
    projectId: "sneaker-dea",
    storageBucket: "sneaker-dea.appspot.com",
    messagingSenderId: "337514349330",
    appId: "1:337514349330:web:cc9869b98edc43c84729cb",
    measurementId: "G-HK2DF00HY7"
};

const firestore = firebase.default.initializeApp(firebaseConfig).firestore();

export { firestore }