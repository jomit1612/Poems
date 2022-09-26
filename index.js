import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1dmKMLQuHUqqwm9GvnbENQw8R0nR_dTI",
  authDomain: "poems-6ce1c.firebaseapp.com",
  databaseURL: "https://poems-6ce1c-default-rtdb.firebaseio.com",
  projectId: "poems-6ce1c",
  storageBucket: "poems-6ce1c.appspot.com",
  messagingSenderId: "30091533689",
  appId: "1:30091533689:web:2daadfe1bbadb524ab23a8",
  measurementId: "G-LDQ50EMGLK",
};

const app = initializeApp(firebaseConfig);
export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);

  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}
writeUserData("adad,dsfsdf,sdsdf,sdfsf");
