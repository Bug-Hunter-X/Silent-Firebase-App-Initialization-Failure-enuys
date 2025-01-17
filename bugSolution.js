import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  //measurementId: "YOUR_MEASUREMENT_ID", //Analytics is optional
};

// Initialize Firebase with error handling
try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
  //const analytics = getAnalytics(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
}
