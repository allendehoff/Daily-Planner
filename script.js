var currentDay = moment().format("MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").text(currentDay)

var currentTime = moment().format("hh:mm:ss")
console.log(currentTime)
$("#currentTime").text(moment().format("hh:mm:ss"))

var currentHour = moment().format("H")
console.log(currentHour)


var times = []



renderSched()
colorTimeBlocks()
$(".saveBtn").on("click", function(){
    var timeBlock = $(this).parent().attr('id')
    var timeBlockInput = "#" + timeBlock + "Input"
    localStorage.setItem(timeBlock, $(timeBlockInput).val())
    if ((jQuery.inArray(timeBlock,times)) === -1){
    // console.log(times)
    // console.log("Already there")
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
//     $("input").addClass("future")
//     if ($(".hour").attr("id") < currentHour){
//         $("input").removeClass("future")
//         $("input").addClass("past")
//     } else if ($(".hour").attr("id") = currentHour){
//         $("input").removeClass("future")
//         $("input").removeClass("past")
//         $("input").addClass("present")
// }}
// function getTimeBlock(hour) {
//     return $("#" + hour)
// }

    
    // console.log()


