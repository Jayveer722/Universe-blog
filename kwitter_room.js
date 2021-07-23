var firebaseConfig = {
      apiKey: "AIzaSyDTd6E1yokeTY_exMFE8hr-NfHsH8QsaQU",
      authDomain: "numeric-oarlock-315115.firebaseapp.com",
      databaseURL: "https://numeric-oarlock-315115-default-rtdb.firebaseio.com",
      projectId: "numeric-oarlock-315115",
      storageBucket: "numeric-oarlock-315115.appspot.com",
      messagingSenderId: "608240830499",
      appId: "1:608240830499:web:6b092fb1315f733ff28996",
      measurementId: "G-F7JZBNJS30"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";      
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";      
}