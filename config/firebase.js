import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC3TIS0Ru3XgTVXdUEad-iRXs8MqRKTaGg",
  authDomain: "chat-app-tutorial-d50be.firebaseapp.com",
  projectId: "chat-app-tutorial-d50be",
  storageBucket: "chat-app-tutorial-d50be.appspot.com",
  messagingSenderId: "1097539414429",
  appId: "1:1097539414429:web:201668c27c470dad05e774",
  databaseURL: Constants.expoConfig.extra.databaseURL,
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
