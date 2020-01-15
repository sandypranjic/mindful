// firebase.js
import firebase from 'firebase';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {   
    apiKey: "AIzaSyBUKHDQ4ldrLO7yUxUtY6zq21OfGUhiPrQ",
    authDomain: "mindful-app-d5d4c.firebaseapp.com",
    databaseURL: "https://mindful-app-d5d4c.firebaseio.com",
    projectId: "mindful-app-d5d4c",
    storageBucket: "mindful-app-d5d4c.appspot.com",
    messagingSenderId: "246715076654",
    appId: "1:246715076654:web:ee0dcbd58ba8acad50cfbf"

};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;