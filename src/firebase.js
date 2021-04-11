import firebase from "firebase/app"
import "firebase/auth"


var app = firebase.initializeApp({
    apiKey: "AIzaSyCqUTHsCClOvlEY-lIb8S44_Krm1lQI3o8",
    authDomain: "authentication-dev-9c3c8.firebaseapp.com",
    databaseURL : "https://authentication-dev-9c3c8.firebaseapp.com",
    projectId: "authentication-dev-9c3c8",
    storageBucket: "authentication-dev-9c3c8.appspot.com",
    messagingSenderId: "519262468328",
    appId: "1:519262468328:web:20f6c31ff5ac025f2b715d"
})


export const auth = app.auth()
export default app