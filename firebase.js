import firebase from "firebase/app";
import "firebase/firebase-messaging";

var firebaseConfig = {
    apiKey: "AIzaSyBECZKutXFCjK3il7lp3_RzRa8_PbodYFo",
    authDomain: "roomfinderunibz.firebaseapp.com",
    databaseURL:
        "https://roomfinderunibz-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "roomfinderunibz",
    storageBucket: "roomfinderunibz.appspot.com",
    messagingSenderId: "132303071776",
    appId: "1:132303071776:web:d495cef6f4eb3d87502a45",
    measurementId: "G-4S5QDVH7YG",
};

firebase.initializeApp(firebaseConfig);

export default firebase.messaging();
