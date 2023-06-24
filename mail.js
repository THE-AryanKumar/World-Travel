const firebaseConfig = {
  apiKey: "AIzaSyBLJPaz-szL0lxX-Lm95XSGKlLX0O9-eGY",
  authDomain: "booking-f27d3.firebaseapp.com",
  databaseURL: "https://booking-f27d3-default-rtdb.firebaseio.com",
  projectId: "booking-f27d3",
  storageBucket: "booking-f27d3.appspot.com",
  messagingSenderId: "541831986382",
  appId: "1:541831986382:web:a430bbd5539de2f211649f",
};

firebase.initializeApp(firebaseConfig);

var FirebaseBookingDB = firebase.database().ref("FirebaseBooking");
document
  .getElementById("FirebaseBooking")
  .addEventListener("submit", submitForm);
console.log("chal raha hoon");

function submitForm(e) {
  e.preventDefault();

  var where = getElementVal("where");
  var number = getElementVal("number");
  var arrivals = getElementVal("arrivals");
  var leaving = getElementVal("leaving");
  console.log("chal raha hoon bhai");
  console.log(where, number, arrivals, leaving);

  saveMessages(where, number, arrivals, leaving);

  // document.querySelector(".alert").style.display="block";

  //     setTimeout(()=>{
  //         document.querySelector(".alert").style.display="none";
  //     }, 3000);

  // document.getElementById("box1").reset();
}

const saveMessages = (where, number, arrivals, leaving) => {
  var newReviewForm = FirebaseBookingDB.push();
  // console.log(where, number, arrivals, leaving);
  newReviewForm.set({
    where: where,
    number: number,
    arrivals: arrivals,
    leaving: leaving,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
