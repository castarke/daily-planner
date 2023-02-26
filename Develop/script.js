// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = document.querySelector(".saveBtn")
var date = dayjs().format('dddd, MMMM D YYYY hh:mma');
$("#currentTime").html(date);

$(document).ready(function() {
})



function colorChange() {
  var time = dayjs().get('hour');
  $(".time-block").each(function() {
  var eventTime = parseInt($(this).attr("id").split("hour")[1]);

  if (eventTime === time) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present") ;
  }
  else if (eventTime < time) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past")
  }
  else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
  }
})
};

$(".saveBtn").on('click',function(){
  var plans = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  localStorage.setItem (hour, plans);
 })

 $('.clearBtn').on('click', function(event){
  localStorage.clear();
  $('textarea').val("");
  event.preventDefault();
 })

colorChange();

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
  

// $(function () {
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
// });

