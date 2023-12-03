  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  import {
    getDatabase,
    ref,
    get,
    child,
  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBozbZWYjPfk8NJBvMy-S4owF1zv7-Q6eg",
    authDomain: "quanlynhahang-ee2e7.firebaseapp.com",
    databaseURL:
      "https://quanlynhahang-ee2e7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quanlynhahang-ee2e7",
    storageBucket: "quanlynhahang-ee2e7.appspot.com",
    messagingSenderId: "209540003825",
    appId: "1:209540003825:web:d191d664b278229dcaf650",
    measurementId: "G-P108TVWT4C",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getDatabase(app);
  const dbRef = ref(db);

  const getData = async () => {
    const snapshot = await get(child(dbRef, `NhaHang/nh001`));
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  };

  getData();