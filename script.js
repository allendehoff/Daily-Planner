var currentDay = moment().format("MMMM Do YYYY")
console.log(currentDay)
$("#currentDay").text(currentDay)

var currentTime = moment().format("hh:mm:ss")
console.log(currentTime)

renderSched()
// var nineAm = $("#9am").val()
$(".saveBtn").on("click", function(){
    localStorage.setItem("nine", $("#9am").val())
    console.log($("#9am").val())
    renderSched()
})

function renderSched(){
    var nine = localStorage.getItem("nine")
    $("#9am").val(nine)

}


    
    // console.log()


