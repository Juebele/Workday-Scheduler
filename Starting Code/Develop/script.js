// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const dayJsObject = dayjs();
const currentHour = dayjs().format('HH'); //this returns the current hour to compare against each time block

console.log(currentHour)
console.log(dayJsObject.format('dddd'))

var savedTask = document.getElementById("9-text");

function saveData () {
  var ids = ["9-text", "10-text", "11-text", "12-text", "13-text", "14-text", "15-text", "16-text", "17-text"];
  for (var i = 0; i < ids.length; i++) {
    var textarea = document.getElementById(ids[i]);
    localStorage.setItem(ids[i], textarea.value);
    console.log(textarea.value);
  }
}

function loadData () {
  var ids = ["9-text", "10-text", "11-text", "12-text", "13-text", "14-text", "15-text", "16-text", "17-text"];
  for (var i = 0; i < ids.length; i++) {
    var data = localStorage.getItem(ids[i]);
    var element = document.getElementById([i]);
    console.log(ids)
    console.log(data);
    element.innerHTML += data;
    
  }
}

window.onload = function () {
  loadData()
}

$(function () {

  // document.getElementById("currentDay").innerHTML = "Today is " + dayJsObject.format('dddd');
  // document.getElementById("09").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("10").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("11").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("12").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("13").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("14").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("15").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("16").innerHTML = "The current hour is " + currentHour;
  // document.getElementById("17").innerHTML = "The current hour is " + currentHour;

  //this is the main function that should change the background color if the ID matches the current hour.
  function changeBackground() {

    // var timeBlocks = document.getElementsByClassName('time-block');
    // for (i = 0; i < timeBlocks.length; i++) {
    //   var hour = timeBlocks[i].//I need something here to record the hour in each div;
    //   if (hour == currentHour) {
    //     var textarea = timeBlocks[i].querySelector(//I need something here to target the textarea); // select the textarea element
    //     textarea.style.backgroundColor = 'red'; // set the background color of the textarea
    //   } else {
    //     console.log(hour);
    //   }
    // }
  }

  changeBackground()
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  
  // TODO: Add code to display the current date in the header of the page.
});
