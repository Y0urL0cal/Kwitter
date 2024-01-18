
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCBBAbNHfsqwzbnY0KyvbzZpXj33BR8_9s",
      authDomain: "kwittercom-33d55.firebaseapp.com",
      projectId: "kwittercom-33d55",
      storageBucket: "kwittercom-33d55.appspot.com",
      messagingSenderId: "125468344996",
      appId: "1:125468344996:web:b3beb9bb38e42c2ab19c31",
      measurementId: "G-9JC1VNSBJ2"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
