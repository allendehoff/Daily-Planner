var currentDay = moment().format("MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").text(currentDay)

var currentTime = moment().format("hh:mm:ss")
console.log(currentTime)


var times = []



renderSched()
$(".saveBtn").on("click", function(){
    var timeBlock = $(this).parent().attr('id')
    var timeBlockInput = "#" + timeBlock + "Input"
    localStorage.setItem(timeBlock, $(timeBlockInput).val())
    times.push(timeBlock)
    localStorage.setItem("times", JSON.stringify(times))
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
// function getTimeBlock(hour) {
//     return $("#" + hour)
// }

    
    // console.log()


