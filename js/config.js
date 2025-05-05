const firebaseConfig = {
    apiKey: "AIzaSyDxUujSje0ekWYU5wEtj3dPOkYIwh81y_M",
    authDomain: "mensajes-danez.firebaseapp.com",
    projectId: "mensajes-danez",
    storageBucket: "mensajes-danez.firebasestorage.app",
    messagingSenderId: "774113943529",
    appId: "1:774113943529:web:7a908ea951dfc3b0ad7578"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();