import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmv1d-MpiLGLPcwyu3iWBHnrJRlwUVCUM",
  authDomain: "zolorf.firebaseapp.com",
  projectId: "zolorf",
  storageBucket: "zolorf.appspot.com",
  messagingSenderId: "1068472661431",
  appId: "1:1068472661431:web:49e466e921e65ce565a432",
  measurementId: "G-YED3FP3X7Y"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectAuth = firebase.auth()

export{ projectFirestore, timestamp, projectAuth }