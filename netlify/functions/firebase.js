const firebase = require("firebase/app")
require("firebase/firestore")

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1ay5Bb2GnQAeT5ALXpIDUmfeGAHqlfuo",
    authDomain: "kiei451-hw7.firebaseapp.com",
    projectId: "kiei451-hw7",
    storageBucket: "kiei451-hw7.appspot.com",
    messagingSenderId: "985336264548",
    appId: "1:985336264548:web:825cc7b994634376e56c71"

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase