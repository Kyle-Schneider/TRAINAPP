alert("CHOO CHEW");
 // Initialize Firebase
 
var config = {
  apiKey: "AIzaSyBaone8gb0YPRAtYTyRoGqMhm4Er-MGeLE",
  authDomain: "train-schedule-8dab7.firebaseapp.com",
  databaseURL: "https://train-schedule-8dab7.firebaseio.com",
  projectId: "train-schedule-8dab7",
  storageBucket: "train-schedule-8dab7.appspot.com",
  messagingSenderId: "66792394530"
};

firebase.initializeApp(config);
var database = firebase.database();

//var trainarr

$("#addtrain").on("click", function(event) {
    event.preventDefault();
    confirm("ready?");
  
    // Grabs user input
    var train= $("#trainname").val().trim();
    var place = $("#destination").val().trim();
    var firsttrain = $("#firsttraintime").val().trim(); 
    var frequency = $("#frequency").val().trim();
    
    //moment() "DD/MM/YY").format("X");on first train ??
    //$("#tablerow").append("<td>"+train+"</td>"+"<td>"+place+"</td>"+"<td>"+firsttrain+"</td>"+"<td>"+frequency+"</td>");

    // Creates local "temporary" object for holding train data
    var newtrain = {
      name: train,
      destination: place,
      traintime: firsttrain,
      frequency
    };

    

    console.log(newtrain);
  
    // Uploads train data to the database
    database.ref().push(newtrain);
  });

  database.ref().on("child_added", function(childSnapshot) {
      
    $("#tablebody").append("<tr>"+"<td>" + childSnapshot.val().name + "</td>" + "<td>" + childSnapshot.val().destination + "</td>"+
    "<td>" + childSnapshot.val().traintime + "</td>"+"<td>" + childSnapshot.val().frequency + "</td>"+"</tr>");
    
    // Time is 3:30 AM
    var firstTime = childSnapshot.val(). traintime;
    
      // First Time (pushed back 1 year to make sure it comes before current time)
      var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
      console.log(firstTimeConverted);


    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
    // Log everything that's coming out of snapshot

//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().destination);
//     console.log(childSnapshot.val().traintime);
//     console.log(childSnapshot.val().frequency);

//     snap = childSnapshot.val();
// console.log(snap.name, snap.destination, snap.traintime, snap.frequency);
  });
  //+snap.name+
  // function add (){
  //    $("#tablebody")("<tr></tr>");


  // }

  // add();

//

// var nameRow = $("<td></td>");
// nameRow.text(snap.name);
// newRow.append(nameRow);

// var roleRow = $("<td></td>");
// roleRow.text(snap.destination);
// newRow.append(roleRow);

// var startRow = $("<td></td>");
// startRow.text(snap.traintime);
// newRow.append(startRow);

// var blankRow = $("<td></td>");
// var monthsWorked = moment().diff(snap.start, "month");
// blankRow.text(monthsWorked);
// newRow.append(blankRow);

// var rateRow = $("<td></td>");
// rateRow.text(snap.frequency);
// newRow.append(rateRow);

// // var owedRow = $("<td></td>");
// // var numRate = parseInt(snap.rate);
// // var numMonths = parseInt(monthsWorked);
// // var owed = (numRate * numMonths);
// // owedRow.text(owed);
// // newRow.append(owedRow);

// $("#tableInput").append(newtrain);
// })
