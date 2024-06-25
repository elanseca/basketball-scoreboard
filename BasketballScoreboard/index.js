let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let resetScore = document.getElementById("new")

let homeCount = 0
let guestCount = 0

//HOME 
function homePlusOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homePlusTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homePlusThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

//GUEST 
function guestPlusOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestPlusTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestPlusThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}

//NEW GAME 
function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}

///TIMEEEE

// let test = document.getElementById("countdown");
// //let num = 3;
// let dateObj = new Date();
// let a = dateObj.setMinutes(10);



// const time = now.getTime();
// console.log(time);

// test.textContent = dateObj;


// global variables for reference
// var downloadTimer;

// function startInterval() {  // everything inside this function that is called with click on button
//     downloadTimer = setInterval(function function1(){
//       document.getElementById("countdown").innerHTML = timeleft;
  
//       timeleft -= 1;
//       if(timeleft <= 0){
//         clearInterval(downloadTimer);
//         document.getElementById("countdown").innerHTML = "Time is up!"
//       }
//     }, 1000);
//   }