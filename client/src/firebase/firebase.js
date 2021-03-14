import * as firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDAALs05d8dvO3Xc6O6U22p46J_bw3QUf8",
    authDomain: "sneaker-dea.firebaseapp.com",
    databaseURL: "https://sneaker-dea.firebaseio.com",
    projectId: "sneaker-dea",
    storageBucket: "sneaker-dea.appspot.com",
    messagingSenderId: "337514349330",
    appId: "1:337514349330:web:b9862fbe33d70fdc4729cb",
    measurementId: "G-DHZGT896E7"
};

const firestore = firebase.initializeApp(firebaseConfig).firestore();

export { firestore }