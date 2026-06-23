const firebaseConfig = {
      apiKey: "AIzaSyBvAS1GpxpM144QaIH3ZOCfiYpuTxAXQFg",
      authDomain: "elbarrigon.firebaseapp.com",
      projectId: "elbarrigon",
      storageBucket: "elbarrigon.firebasestorage.app",
      messagingSenderId: "143172295006",
      appId: "1:143172295006:web:2957703079c69a658797cf"
    };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();