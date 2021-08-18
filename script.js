var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime == timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
            console.log(blockTime);
            console.log(timeNow);
        })
        
    }


    $("#time7 .description").val(localStorage.getItem("time7"));
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));

    timeTracker();
})