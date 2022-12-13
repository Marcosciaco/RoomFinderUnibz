importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
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

const app = firebase.initializeApp(firebaseConfig);
