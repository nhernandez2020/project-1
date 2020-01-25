//db properties
var config = {
  apiKey: "AIzaSyCfdeBT5mxosBZIEwWBryEkCW1vct0xOrc",
  authDomain: "class-d1b90.firebaseapp.com",
  databaseURL: "https://class-d1b90.firebaseio.com",
  projectId: "class-d1b90",
  storageBucket: "class-d1b90.appspot.com",
  messagingSenderId: "150993905646",
  appId: "1:150993905646:web:8e131f8d6c852abe0bd0ff",
  measurementId: "G-515WJ1WC1M"
};

//initialize database
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//add stickerList to db
function addStickerList(imageURL, id) {
  database.ref("/stickersdb01254").push({
    url: imageURL,
    stickerId: id,
    dateadded: firebase.database.ServerValue.TIMESTAMP
  });
}

///read all data and add to stickerList only when page is reloaded
database.ref("/stickersdb01254").orderByChild("stickerId").once("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var rowDiv = `<tr>
                        <td>${childSnapshot.val().url}</td>
                        <td id=stickId style=display:none>${childSnapshot.val().stickerId}</td>
                         </tr>`
    stickerListId = childSnapshot.val().stickerId
    $(".sticker-list").last().append(rowDiv)
  })
})