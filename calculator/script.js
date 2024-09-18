var display=document.getElementById("display")
var btn = document.getElementsByClassName("btn")

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",expression)
    
}

function expression(e){
    var x=e.target
    if (x.innerText=="=") {
        display.value=eval(display.value)
        
    }
    else if (x.innerText.toLowerCase() === "c") { 
        display.value = ""; }

    else {
        display.value+=x.innerText
    }

}