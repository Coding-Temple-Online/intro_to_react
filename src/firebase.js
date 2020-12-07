import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA0gtd1prpux52vg48ec08-FEWq-ubXMtQ",
    authDomain: "fakebook2-8ac60.firebaseapp.com",
    databaseURL: "https://fakebook2-8ac60-default-rtdb.firebaseio.com",
    projectId: "fakebook2-8ac60",
    storageBucket: "fakebook2-8ac60.appspot.com",
    messagingSenderId: "1046339004977",
    appId: "1:1046339004977:web:054a7ff1ca34176837c310",
    measurementId: "G-KK9NXN3BEQ"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;