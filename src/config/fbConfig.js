import firebase from 'firebase/app'
import 'firebase/firestore' //database
import 'firebase/auth'

//Initialize Firebase
var config = {
    apiKey: "AIzaSyA18IfS5VccMSPmufQjSFhp47_cKiBdh6k",
    authDomain: "geneh96-notelist.firebaseapp.com",
    databaseURL: "https://geneh96-notelist.firebaseio.com",
    projectId: "geneh96-notelist",
    storageBucket: "geneh96-notelist.appspot.com",
    messagingSenderId: "21771936374"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase