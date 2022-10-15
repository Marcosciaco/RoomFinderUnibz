import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.prototype.$analytics = analytics;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: function (h) {
        return h(App);
    },
}).$mount("#app");
