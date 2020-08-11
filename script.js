//Variable to get the date to put in Header of planner
var currentDay = moment().format("MMMM Do YYYY")
$("#currentDay").text(currentDay)

//Variable to get current hour to compare against for rendering colors in timeblocks based on what time it is
var currentHour = parseInt(moment().format("H"))

//Variables needed for rendering HTML from jQuery
var IDs = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
var Labels = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var LabelIds = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

//Variable to hold empty array that will be filled when new events are added or removed
var times = []

//Runs function to make HTML when page is loaded
setupPlanner()

//Runs function to fill in schedule blocks from local storage any time page is loaded or refreshed
renderSched()

//Runs function to color timeblocks based on current time any time page is loaded or refreshed
colorTimeBlocks()

//Function to build HTML from jQuery
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

//Function to save events to local storage any time a save button is clicked
$(".saveBtn").on("click", function(){
    var timeBlock = $(this).parent().attr('id')
    var timeBlockInput = "#" + timeBlock + "Input"
    localStorage.setItem(timeBlock, $(timeBlockInput).val())
    if ((jQuery.inArray(timeBlock,times)) === -1){
    times.push(timeBlock)
    localStorage.setItem("times", JSON.stringify(times))}
})

//Function to retrieve events from local storage
function renderSched(){
    var storedTimes = JSON.parse(localStorage.getItem("times"))
    if (storedTimes !== null){

    times = storedTimes
    for (var i = 0; i < storedTimes.length; i++){
    var timeBlock = "#" + storedTimes[i] + "Input"
    $(timeBlock).val(localStorage.getItem(storedTimes[i]))
    }}
}

//Function to color time blocks based on current time and whether the time block is past, present, or future
function colorTimeBlocks (){
    $(".hour").each(function(){
        var thisHour = (parseInt($(this).attr("id")))
        if (thisHour < currentHour){
            $(this).siblings("input").addClass("past")
        } else if (thisHour === currentHour){
            $(this).siblings("input").addClass("present")
        } else if (thisHour > currentHour){
            $(this).siblings("input").addClass("future")
        }
    })
}