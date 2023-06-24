const firebaseConfig = {
  apiKey: "AIzaSyDMLk5ADwuK6WjHY3DTjjxQkhwDkkyF8k8",
  authDomain: "contactform3-195d0.firebaseapp.com",
  databaseURL: "https://contactform3-195d0-default-rtdb.firebaseio.com",
  projectId: "contactform3-195d0",
  storageBucket: "contactform3-195d0.appspot.com",
  messagingSenderId: "53647887584",
  appId: "1:53647887584:web:90c6bc9d28fdd8a7321485",
  measurementId: "G-9SB85WBBH5"
};
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,  email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,  email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}