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
let data = [];

const getData = async () => {
  const snapshot = await get(child(dbRef, `NhaHang/`));
  if (snapshot.exists()) {
    console.log(snapshot.val());
    data = Object.values(snapshot.val());
  } else {
    console.log("No data available");
  }
};

// getData();

const content = document.querySelector(".content");
const updateUi = async () => {
  await getData();
  data.map((item, index) => {
    content.innerHTML = `
    <div class="card" style="width: 18rem">
    <img src="${item.anhNhaHang}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${item.tenNhaHang}</h5>
      <p class="card-text">
        ${item.diaChiNhaHang}
        <div id="rating"></div>
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    const star = Object.values(item.danhGia);
    const average = star.reduce((a, b) => a + b, 0) / star.length;

    $(function () {
      $("#rating").rateYo({
        rating: average,
        fullStar: true,
        onSet: function (rating, rateYoInstance) {
          // Your logic to handle the rating, for example, send it to the server
          console.log("You rated " + rating + " stars.");
        },
      });
    });
  });
};

updateUi();
// const card = `<div class="card" style="width: 18rem">
//     <img src="..." class="card-img-top" alt="..." />
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`;
