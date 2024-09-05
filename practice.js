var output= document.getElementById("output")
var text = document.getElementById("text")
var sub = document.getElementById("submit")

sub.addEventListener("click",changeText)

function changeText(){
    const abx= text.value
    output.innerText=abx
}
