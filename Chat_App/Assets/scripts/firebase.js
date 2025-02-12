const firebaseConfig = {
  apiKey: "AIzaSyC8OdbjglEu1MUagrFprQ0k72BcI5XRca4",
  authDomain: "chat-app-4e7b0.firebaseapp.com",
  projectId: "chat-app-4e7b0",
  storageBucket: "chat-app-4e7b0.firebasestorage.app",
  messagingSenderId: "378947070596",
  appId: "1:378947070596:web:a38c130c6474ece5b5b0d1",
  measurementId: "G-3PLDSCZC6W",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
