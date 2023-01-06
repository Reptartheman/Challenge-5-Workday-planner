
$(function () {
  $("#time9AM").val(localStorage.getItem("9AM"));
  $("#time10AM").val(localStorage.getItem("10AM"));
  $("#time11AM").val(localStorage.getItem("11AM"));
  $("#time12PM").val(localStorage.getItem("12PM"));
  $("#time1PM").val(localStorage.getItem("1PM"));
  $("#time2PM").val(localStorage.getItem("2PM"));
  $("#time3PM").val(localStorage.getItem("3PM"));
  $("#time4PM").val(localStorage.getItem("4PM"));
  $("#time5PM").val(localStorage.getItem("5PM"));
  var now = dayjs().format("dddd, MMMM D YYYY");
  console.log(now);
  $("#currentDay").text(now);


  $(".saveBtn").on("click", function() {
    var hour = $(this).siblings(".hour").text();
    localStorage.setItem($(this).siblings(".hour").text(), $(this).siblings(".description").val());
  });


  
function changeTime(){
    let currentHour = dayjs().hour();
    console.log(currentHour);
    $(".time-block").each(function (){
      let Time = parseInt($(this).attr("data-time"));
      console.log(Time);
      if (Time < currentHour){
        $(this).addClass("past");
      } else if (Time === currentHour){
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    })
}
changeTime();

  
});
console.log("All systems a go");
