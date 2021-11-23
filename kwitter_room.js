const firebaseConfig = {
  apiKey: "AIzaSyA8Pwzz_osjfs6UabPRyajn6myUIh7j2NI",
  authDomain: "my-gasp-chat.firebaseapp.com",
  databaseURL: "https://my-gasp-chat-default-rtdb.firebaseio.com",
  projectId: "my-gasp-chat",
  storageBucket: "my-gasp-chat.appspot.com",
  messagingSenderId: "531639972163",
  appId: "1:531639972163:web:571a24d12ca95b43913ff6",
  measurementId: "G-WM49BKDZX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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

function addroom() 
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
        }); 

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

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
