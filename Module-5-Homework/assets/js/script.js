 var today = moment().format("MMM Do, YYYY, h:mm:ss a");
  $("#currentDay").text(today);

// setInterval()

// $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//each time block is color-coded to indicate weather it is in the past.
function timeColor(){
var d = new Date();
var n = d.getHours();
$(".hour").each(function(){
    var currentTIme = $(this).attr("data-time");
    console.log("current time: " + currentTIme);
    //console.log("hour: "+n);
    //console.log(typeof currentTIme);
    //console.log(typeof n);

    if(currentTIme < n)
    {
        $(this).addClass("past");
    }
    else if(currentTIme == n){
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }

    var temp = JSON.parse(window.localStorage.getItem("Note")) || [];
    for(var i=0; i<temp.length;i++){
        $("#"+temp[i].time).val(temp[i].note);
    }
})
}

timeColor();


// save button function to local storage even when refreshing
function saveEvent (event){
var noteInput = $(this).siblings("input").val().trim(); 
var time = $(this).siblings("input").attr("data-time");
var arr = {
    note: noteInput,
    time: time
}

var temp = JSON.parse(window.localStorage.getItem("Note")) || [];
temp.push(arr)

window.localStorage.setItem("Note", JSON.stringify(temp));
}

$(".saveBtn").on("click", saveEvent);
localStorage.clear()