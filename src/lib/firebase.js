import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyBflRU7TMvIxLa2yYDFAYacYpU3EoQg9ng",
    authDomain: "instagram-yt-50d74.firebaseapp.com",
    projectId: "instagram-yt-50d74",
    storageBucket: "instagram-yt-50d74.appspot.com",
    messagingSenderId: "751349786066",
    appId: "1:751349786066:web:b6d7c78e5f7e6e73d4940b"
};

const firebase = Firebase.initializeApp(config);

const  {FieldValue} = Firebase.firestore;

export {firebase,FieldValue};