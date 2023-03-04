// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButton = document.querySelector(".saveBtn")
var date = dayjs().format('dddd, MMMM D YYYY hh:mma');
$("#currentTime").html(date);


$(document).ready(function() {
})


// changing color of cell blocks based on the time
function colorChange() {
  var time = dayjs().get('hour');
  $(".time-block").each(function() {
  var eventTime = parseInt($(this).attr("id").split("hour")[1]);
// changing color to red for present time
  if (eventTime === time) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present") ;
  }
  // changing color to gray for past
  else if (eventTime < time) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past")
  }
  // changing color to green for future
  else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
  }
})
};

// setting up the save button so it will save the plans and the hours to local storage
$(".saveBtn").on('click',function(){
  var plans = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  localStorage.setItem (hour, plans);
 })

//  setting up a clear button to clear local storage and to clear the plans from their blocks
 $('.clearBtn').on('click', function(event){
  localStorage.clear();
  $('textarea').val("");
  event.preventDefault();
 })

colorChange();

// 8am from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
// 9am from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
// 10 am from local storage
$("#hour10 .description").val(localStorage.getItem("hour10"));
// 11am from local storage
$("#hour11 .description").val(localStorage.getItem("hour11"));
// 12pm from local storage
$("#hour12 .description").val(localStorage.getItem("hour12"));
// 1pm from local storage
$("#hour13 .description").val(localStorage.getItem("hour13"));
// 2pm from local storage
$("#hour14 .description").val(localStorage.getItem("hour14"));
// 3pm from local storage
$("#hour15 .description").val(localStorage.getItem("hour15"));
// 4pm from local storage
$("#hour16 .description").val(localStorage.getItem("hour16"));
// 5pm from local storage
$("#hour17 .description").val(localStorage.getItem("hour17"));
// 6pm from local storage
$("#hour18 .description").val(localStorage.getItem("hour18"));