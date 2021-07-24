import firebase from 'firebase'

    const firebaseApp = firebase.initializeApp({      
      apiKey: "AIzaSyCSQ9ufwC3rtc-0-6cxYhYkJIuz8-eGsk8",
      authDomain: "amazcln.firebaseapp.com",
      projectId: "amazcln",
      storageBucket: "amazcln.appspot.com",
      messagingSenderId: "80151277191",
      appId: "1:80151277191:web:eaf5db0b56e39c85be1222",
      measurementId: "G-FPZ4TLH140"
    });
  
    const db = firebase.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    export {db , auth , provider} 