var currentDay = moment().format("MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").text(currentDay)

var currentTime = moment().format("hh:mm:ss")
console.log(currentTime)
$("#currentTime").text(moment().format("hh:mm:ss"))

var currentHour = moment().format("H")
console.log(currentHour)


var times = []
var IDs = ["nine", "ten", "eleven", "twleve", "one", "two", "three", "four", "five"]
var Labels = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var LabelIds = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

setupPlanner()
renderSched()
// colorTimeBlocks()


function setupPlanner(){
var container = $("<div>")
container.addClass("container")
$(container).insertAfter(".jumbotron")
for (i = 0; i < IDs.length; i++){
    var rowDiv = $("<div>").addClass("row").attr("id", IDs[i])
    container.append(rowDiv)
    var labelDiv = $("<div>").addClass("col-1 hour").attr("id", LabelIds[i]).text(Labels[i])
    rowDiv.append(labelDiv)
    var newInput = $("<input>").attr("type", "text").addClass("col-10").attr("id", (IDs[i] + "Input"))
    rowDiv.append(newInput)
    var newBtn = $("<button>").addClass("col-1 saveBtn")
    var saveImg = $("<img>").addClass("img-responsive").attr("src", "saveIcon.png").attr("alt", "image of floppy disk")
    newBtn.append(saveImg)
    rowDiv.append(newBtn)
}
}

$(".saveBtn").on("click", function(){
    var timeBlock = $(this).parent().attr('id')
    var timeBlockInput = "#" + timeBlock + "Input"
    localStorage.setItem(timeBlock, $(timeBlockInput).val())
    if ((jQuery.inArray(timeBlock,times)) === -1){
    times.push(timeBlock)
    localStorage.setItem("times", JSON.stringify(times))}
})

function renderSched(){
    var storedTimes = JSON.parse(localStorage.getItem("times"))
    if (storedTimes !== null){

    times = storedTimes
    for (var i = 0; i < storedTimes.length; i++){
    var timeBlock = "#" + storedTimes[i] + "Input"
    console.log(timeBlock)
    $(timeBlock).val(localStorage.getItem(storedTimes[i]))
    }}
}

// function colorTimeBlocks (){
//     console.log($(".hour").attr("id"))
// //     $("input").addClass("future")
// //     else if ($(".hour").attr("id") < currentHour){
// //         // $("input").removeClass("future")
// //         $("input").addClass("past")
// //     } else if ($(".hour").attr("id") === currentHour){
// //         // $("input").removeClass("future")
// //         // $("input").removeClass("past")
// //         $("input").addClass("present")
// // }
// }



// function getTimeBlock(hour) {
//     return $("#" + hour)
// }

    
    // console.log()


