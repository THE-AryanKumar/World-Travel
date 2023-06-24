const firebaseConfig = {
    apiKey: "AIzaSyDrawgHgnrFlTC8pa3SzIdF6t9rJVhFvEc",
    authDomain: "reviewform-e9e8a.firebaseapp.com",
    databaseURL: "https://reviewform-e9e8a-default-rtdb.firebaseio.com",
    projectId: "reviewform-e9e8a",
    storageBucket: "reviewform-e9e8a.appspot.com",
    messagingSenderId: "55755832619",
    appId: "1:55755832619:web:d7df6c7aae93f5a305996e"
  };
firebase.initializeApp(firebaseConfig);

var reviewFormDB = firebase.database().ref("box1");
document.getElementById("box1").addEventListener("submit" , submitForm);
console.log("chal raha hoon");

function submitForm(e){
    e.preventDefault();

    var entername = getElementVal("entername");
    var enteremail = getElementVal("enteremail");
    var enterplace = getElementVal("enterplace");
    var enterreview = getElementVal("enterreview");
    // console.log("chal raha hoon");
    // console.log(name,email,place,review);

    saveMessages(entername,enteremail,enterplace,enterreview);

    document.querySelector(".alert").style.display="block";

    setTimeout(()=>{
        document.querySelector(".alert").style.display="none";
    }, 3000);

document.getElementById("box1").reset();
    
}

const saveMessages = (entername,enteremail,enterplace,enterreview) =>{
    var newReviewForm = reviewFormDB.push();
    console.log(entername, enteremail, enterplace, enterreview);
    newReviewForm.set({
        entername : entername,
        enteremail : enteremail,
        enterplace : enterplace,
        enterreview : enterreview,
    });
    
};

const getElementVal = (id) =>{
    return document.getElementById(id).value;
};

